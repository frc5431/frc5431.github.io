import { useEffect, useState } from 'react';
import './memories.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Lots of Image Imports 
import game2015 from '../../assets/img/about/2015/RecycleRush.png'
import game2016 from '../../assets/img/about/2016/Stronghold.png'
import game2017 from '../../assets/img/about/2017/Steamworks.png'
import game2018 from '../../assets/img/about/2018/PowerUp.png'
import game2019 from '../../assets/img/about/2019/DeepSpace.png'
import game2020_21 from '../../assets/img/about/2020/Infinite_Recharge.jpg'
import game2022 from '../../assets/img/about/2022/Rapid React.png'
import game2023 from '../../assets/img/about/2023/CHARGED_UP_Logo_Horiz_RGB_FullColor-removebg-preview.png'
import game2024 from '../../assets/img/about/2024/CrescendoLogo.png'
import game2025 from '../../assets/img/about/2025/reefscape from team 254.png'
import transitionLogo from '../../assets/img/Logos/5431 Three Titan Heads Logo transition.png'

// 2015 imports
import botPerformance2015 from '../../assets/img/about/2015/BotDoingStuff.jpg'
import IrvingTeam from '../../assets/img/about/2015/IrvingTeam.jpg'
import NewBotOnTheBlock from '../../assets/img/about/2015/NewBotOnTheBlock.jpg'
import Working2015 from '../../assets/img/about/2015/Working.jpg'
import MemoriesYear from '../../components/MemoriesYear';
import { MemoryItemType } from '../../components/MemoriesYear';

const Memories: React.FC = () => {
    const [traveled, toggleTravel] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // year related stuff
    const [year, setYear] = useState(2025);
    const yearMax = 2025;
    const yearMin = 2015;
    const progressPercentage = ((year - yearMin) / (yearMax - yearMin)) * 100;

    // Memory content for different years
    const yearContent = {
        2015: {
            gameName: 'Recycle Rush',
            imageURL: game2015,
            description: 'When the Plano Academy High School (AHS) opened in August of 2015, three students had a goal of creating a robotics team. These three students asked our principal for her permission to start an FRC team. She said NO! So they worked together to start the Titan Robotics Club, building a robot to compete in a local BEST tournament. This only made the team want to join an FRC team more. This only made the students want an FRC team more, so they found mentors and coaches to grow into FRC 5431 Titan Robotics. The first week of the 2015 competition season brought our team to the Dallas Regional. Competing with world champions like 118, 148, 1477, and 2848 was definitely exciting as 5431 came in 10th place, earning us an invitation to the third place alliance! Being the highest ranked rookie seed got us a spot to the St. Louis Championship! The seed started to sprout and we wanted to share it with our community!',
            memoryImages: [
                {
                    imageSrc: botPerformance2015,
                    altText: 'Robot in action',
                    caption: 'Our robot performing during competition'
                },
                {
                    imageSrc: IrvingTeam,
                    altText: 'Team at Irving',
                    caption: 'Our Team at the Irving Competition'
                },
                {
                    imageSrc: NewBotOnTheBlock,
                    altText: 'New robot design',
                    caption: 'Our "New Bot on the Block", first ever robot design'
                },
                {
                    imageSrc: Working2015,
                    altText: 'Team working',
                    caption: 'Team members collaborating on robot construction'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2015'
        },
        2016: {
            gameName: 'Stronghold',
            imageURL: game2016,
            description: 'In 2016, our team competed in the FIRST Stronghold challenge.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2016'
        },
        2017: {
            gameName: 'Steamworks',
            imageURL: game2017,
            description: 'In 2017, our team participated in the FIRST Steamworks competition.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2017'
        },
        2018: {
            gameName: 'Power Up',
            imageURL: game2018,
            description: 'In 2018, our team competed in the FIRST Power Up challenge.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2018'
        },
        2019: {
            gameName: 'Deep Space',
            imageURL: game2019,
            description: 'In 2019, our team participated in the FIRST Deep Space competition.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2019'
        },
        2020: {
            gameName: 'Infinite Recharge',
            imageURL: game2020_21,
            description: 'In 2020, our team competed in the FIRST Infinite Recharge challenge, which continued into 2021 due to the COVID-19 pandemic.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2020'
        },
        2021: {
            gameName: 'Infinite Recharge (continued)',
            imageURL: game2020_21,
            description: 'In 2021, our team continued with the FIRST Infinite Recharge challenge from 2020, adapted for the ongoing COVID-19 pandemic.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2021'
        },
        2022: {
            gameName: 'Rapid React',
            imageURL: game2022,
            description: 'In 2022, our team participated in the FIRST Rapid React competition.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2022'
        },
        2023: {
            gameName: 'Charged Up',
            imageURL: game2023,
            description: 'In 2023, our team competed in the FIRST Charged Up challenge.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2023'
        },
        2024: {
            gameName: 'Crescendo',
            imageURL: game2024,
            description: 'In 2024, our team participated in the FIRST Crescendo competition.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2024'
        },
        2025: {
            gameName: 'Reefscape',
            imageURL: game2025,
            description: 'In 2025, our team is competing in the FIRST Reefscape challenge.',
            memoryImages: [] as MemoryItemType[],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2025'
        },
    };

    const handleTravel = () => {
        setIsTransitioning(true);
        
        setTimeout(() => {
            toggleTravel(true);
            setIsTransitioning(false);
        }, 1000);
    };

    const handleReturn = () => {
        setIsTransitioning(true);
        
        setTimeout(() => {
            toggleTravel(false);
            setIsTransitioning(false);
        }, 1000);
    };

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.style.setProperty('--background-img',
            !traveled ? `url("src/assets/img/universal/background memories.jpg")` : '');
        }
    }, [traveled]);

    return (
        <>
            {isTransitioning && (
                <div className="transition-overlay">
                    <div className="transition-content">
                        <div className="time-machine">
                            
                                <img src={transitionLogo} className="time-machine-placeholder"></img>
                            
                        </div>
                        <div className="transition-text">
                            {traveled ? 'Returning to Present...' : `Traveling to ${year}...`}
                        </div>
                        <div className="loading-bar">
                            <div className="loading-progress"></div>
                        </div>
                    </div>
                </div>
            )}

            {!traveled && !isTransitioning && (
                <div className="memories-container">
                    <div className="year-selector">
                        <button
                            onClick={() => year > yearMin ? setYear(year - 1) : setYear(year)}
                            className="year-button"
                        >
                            <KeyboardArrowDownIcon sx={{ fontSize: 50 }} style={{ color: '#8B1FEA' }} />
                        </button>
                        <h1 className="year-title">{year}</h1>
                        <button
                            onClick={() => year < yearMax ? setYear(year + 1) : setYear(year)}
                            className="year-button"
                        >
                            <KeyboardArrowUpIcon sx={{ fontSize: 50 }} style={{ color: '#8B1FEA' }} />
                        </button>
                    </div>

                    <div className="progress-container">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progressPercentage}%` }}
                            />
                            <div
                                className="progress-marker"
                                style={{ left: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <button className="travelbutton" onClick={handleTravel}>
                            Travel to {year}!
                        </button>
                    </div>
                </div>
            )}
            
            {traveled && !isTransitioning && (
                <>
                    {/* Use our MemoriesYear component for all years */}
                    {yearContent[year as keyof typeof yearContent] && (
                        <MemoriesYear
                            year={year}
                            gameName={yearContent[year as keyof typeof yearContent].gameName}
                            imageURL={yearContent[year as keyof typeof yearContent].imageURL}
                            description={yearContent[year as keyof typeof yearContent].description}
                            memoryImages={yearContent[year as keyof typeof yearContent].memoryImages}
                            learnMoreLink={yearContent[year as keyof typeof yearContent].learnMoreLink}
                        />
                    )}

                    <div className="returnbutton">
                        <button onClick={handleReturn}>Return to Present</button>
                    </div>
                </>
            )}
        </>
    );
};

export default Memories;