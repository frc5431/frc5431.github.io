import { useState } from 'react';
import './Memories.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import MemoriesYear from '../../components/MemoriesYear';
import { MemoryItemType } from '../../components/MemoriesYear';

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

// 2016 imports
import ChronosMavs from '../../assets/img/about/2016/Chronos mavs.jpg'
import Chronos from '../../assets/img/about/2016/Chronos.jpg'
import team2016 from '../../assets/img/about/2016/Team-2016.jpg'

// 2017 imports
import ThriceHang from '../../assets/img/about/2017/Thrice.jpg'
import TeamHopper from '../../assets/img/about/2017/Team-Hopper.jpg'
import Team2017 from '../../assets/img/about/2017/Team.jpg'
import Thrice from '../../assets/img/about/2017/AlsoThrice.jpg'

// 2018 imports
import group2018 from '../../assets/img/about/2018/2018group.jpg'
import OphidianAction from '../../assets/img/about/2018/Ophidian.jpg'
import Scropius from '../../assets/img/about/2018/Scorpius.jpg'

//2019 imports
import group2019 from '../../assets/img/about/2019/5431group2019.jpg'
import robot5431 from '../../assets/img/about/2019/5431robot.jpg'
import sign5431 from '../../assets/img/about/2019/5431sign.jpg'
import hardwork5431 from '../../assets/img/about/2019/5431working.jpg'
import AstraeusPlatform from '../../assets/img/about/2019/Astraeus on platform.jpg'
import hardwork5431_2 from '../../assets/img/about/2019/Astraeus up close.jpg'
import AstraeusBox from '../../assets/img/about/2019/astraeus_box.jpg'
import Astraeus from '../../assets/img/about/2019/Astraeus.jpg'
import newGroupPic from '../../assets/img/about/2019/newestgrouppic.jpg'
import pregame2019 from '../../assets/img/about/2019/Robots.jpg'

//2020 imports
import hyperionCompete from '../../assets/img/about/2020/Hyperion competing.jpg'
import hyperionShoot from '../../assets/img/about/2020/Hyperion shooting.jpg'
import hyperionFlag from '../../assets/img/about/2020/Hyperion with flag.jpg'
import OpeningDay2020 from '../../assets/img/about/2020/opening day team photo.jpg'

//2021 imports
import group2021 from '../../assets/img/about/2021/2021 team and robot.jpg'
import zoomPhoto from '../../assets/img/about/2021/zoom team photo.jpg'

//2022 imports
import Hermes from '../../assets/img/about/2022/hermes.jpg'
import HermesAction from '../../assets/img/about/2022/Hermes in action.jpg'
import prototypeBot from '../../assets/img/about/2022/prototype bot not Hermes.jpg'
import prototypeBotAction from '../../assets/img/about/2022/prototype not Hermes in action.jpg'
import team2022 from '../../assets/img/about/2022/team 2022.jpg'
import teamBleachers from '../../assets/img/about/2022/team in bleachers.jpg'
import teamSide2022 from '../../assets/img/about/2022/team_ios.jpg'

//2023 imports
import brontesAction from '../../assets/img/about/2023/brontes action.jpg'
import team2023 from '../../assets/img/about/2023/2023team (1).jpg'

//2025 imports 
import irisinblue from '../../assets/img/about/2025/irisinblue.jpg'
import layingdowniris from '../../assets/img/about/2025/layingdowniris.jpg'
import placingcoral from '../../assets/img/about/2025/placingdowncoraliris.jpg'
import irisbeingworkedon from '../../assets/img/about/2025/irisbeingworkedon.jpg'


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
            description: 'In 2016, we experienced our second year of growth and change through Stronghold. We were no longer the only FRC team in Plano - we had a sister team over at Plano Senior High School, FRC 6171: Chain Reaction Robotics (now Wildcat Robotics).',
            memoryImages: [
                {
                    imageSrc: ChronosMavs,
                    altText: 'Chronos at Mavs',
                    caption: 'Our 2016 robot shooting at a Mavericks game'
                },
                {
                    imageSrc: Chronos,
                    altText: 'Chronos competing',
                    caption: 'Image of our robot in the aftermath of a Stronghold FRC Game'
                },
                {
                    imageSrc: team2016,
                    altText: '5431 FRC Team Members',
                    caption: 'Our 5431 team members who competed in Stronghold'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2016'
        },

        2017: {
            gameName: 'Steamworks',
            imageURL: game2017,
            description: 'In 2017, our team walked into the Dallas regional with our robot, Themis. Due to bag-and-tag day, we had been unable to work on the physical robot, but we weren’t idle. We used this time to design a new lightning-fast robot named Thrice, and we used our 30-lb part bag to transform Themis into one of our best robots yet. Thrice focused on scoring gears in the airships at high speeds and finishing matches with a blink-and-you’ll-miss it climb. This design choice paid off. With Thrice, we ranked 25th and tenth in the Dallas and Brazos Valley Regionals respectively. Our team also earned spirit and imagery awards, and Usaid Malik, one of our talented programmers, was a Dean’s List Finalist. After our season, we started the North Texas Tournament of Robots (NTX) with FRC 6171: Wildcat Robotics, FRC 1296: Full Metal Jackets and FRC 5417: Allen Robotics. Together, we’ve created and sustained a tradition of friendly competition and engineering excellence demonstrated each year.',
            memoryImages: [
                {
                    imageSrc: ThriceHang,
                    altText: 'Thrice Hanging',
                    caption: 'Thrice aboard the airship in the 2017 FRC game'
                },
                {
                    imageSrc: TeamHopper,
                    altText: 'Team Hopper',
                    caption: 'Team Titan Robotics apart of Team Hopper'
                },
                {
                    imageSrc: Team2017,
                    altText: '2017 Members',
                    caption: 'A photo of our 2017 members who competed during this year'
                },
                {
                    imageSrc: Thrice,
                    altText: 'Thrice in Action',
                    caption: 'A moving shot of Thrice in the heat of Steamworks'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2017'
        },

        2018: {
            gameName: 'Power Up',
            imageURL: game2018,
            description: 'PowerUp was a challenge that pushed our engineering capabilities. During the ideation phase, our team came up with two great designs for a possible robot. Scorpios, a catapult on a drivetrain, was one of our original designs. We later changed the design and renamed the robot to Ophidian, which used a collapsible ladder system as both an intake and a climbing mechanism. That year we had our second Dean’s List Finalist, Liav Turkia. He was the programming lead and developed our Titan UTIL Library. This library laid out templates, classes, and methods that the programming team could use for years to come. Our team also won the Creativity Award and the Imagery Award. We volunteered and competed in both NTX and STEM Gals, hosted this year by 5417, Eagle Robotics. Titan Robotics also hosted our first summer camp! We taught kids ages 9 to 14 about STEM by using LEGO Mindstorms and fun challenges.',
            memoryImages: [
                {
                    imageSrc: OphidianAction,
                    altText: 'Ophidian in Action',
                    caption: 'Our final robot: Ophidian in Action',
                },
                {
                    imageSrc: group2018,
                    altText: '2018 Members',
                    caption: 'A photo of our 2018 members who competed during this year',
                },
                {
                    imageSrc: Scropius,
                    altText: 'Scropius',
                    caption: 'Scropius, our first design, in the aftermath of a PowerUp game',
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2018'
        },

        2019: {
            gameName: 'Deep Space',
            imageURL: game2019,
            description: 'Our first district event was very impactful to our team. An alumni of our team had passed away before this event. In honor of his memory, we dedicated this season to him by changing our team name to “Titan Robotics in memory of Jordan Grant”. We played each match to the best of our ability, winning each match (and tying in one). At Plano District, when the judges started calling winners for awards our team was shocked. First it was the Safety Award, then Event Winner, finally Chairman Awards. We won a second safety award at the Greenville District. At States we won the Chairman Award and performed just as well during matches. With Chain Reaction, 6171 (now Wildcat Robotics) we co-hosted 2 new summer camps alongside our original Battle Bots camp; Intro to FIRST LEGO League and Intro to Engineering.',
            memoryImages: [
                {
                    imageSrc: robot5431,
                    altText: 'Astraeus',
                    caption: 'Our 2019 Robot Astraeus, after a successful game in Deep Space',
                },
                {
                    imageSrc: group2019,
                    altText: '2019 Members',
                    caption: 'A photo of our 2019 members who competed during this year'
                },
                {
                    imageSrc: sign5431,
                    altText: '5431 Cheering',
                    caption: 'A photo of our team in full spirit during a game'
                },
                {
                    imageSrc: hardwork5431,
                    altText: 'Hard at Work',
                    caption: 'Our team inspecting and working on Astraeus'
                },
                {
                    imageSrc: AstraeusPlatform,
                    altText: 'Astraeus on Platform',
                    caption: 'A side view of Astraeus fully climbed onto the platform'
                },
                {
                    imageSrc: hardwork5431_2,
                    altText: 'Astraeus components',
                    caption: 'A photo of the components in Astraeus'
                },
                {
                    imageSrc: AstraeusBox,
                    altText: 'Astraeus in a Box',
                    caption: 'Astraeus all packed up in inside a box to be moved'
                },
                {
                    imageSrc: Astraeus,
                    altText: 'Astraeus Final Photo',
                    caption: 'Astraeus posing with the blue banners won this year'
                },
                {
                    imageSrc: newGroupPic,
                    altText: 'Posed up in Pits',
                    caption: 'At the end our team is all posed inside our Pits'
                },
                {
                    imageSrc: pregame2019,
                    altText: 'Pre Game Photo in 2019',
                    caption: 'A Pre Game of Astraeus on the field loaded up'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2019'
        },

        2020: {
            gameName: 'Infinite Recharge',
            imageURL: game2020_21,
            description: 'During 2020, 5431 helped find a cure for COVID-19 through a process called “folding@Home” along with making over 200 masks. Over the past three years, we’ve developed various resources to help teams with awards, growing a strong parent community, programming, scouting, and CADing. We even hosted a “learn the game” night for our parents in collaboration with 6171. We were also fortunate to attend the Plano District tournament before the COVID-19 pandemic prematurely cancelled the Infinite Recharge season. At this event, we ranked 6th and won the Chairman’s award.',
            memoryImages: [
                {
                    imageSrc: hyperionShoot,
                    altText: 'Hyperion Shooting',
                    caption: 'Hyperion in action shooting the game pieces',
                },
                {
                    imageSrc: hyperionCompete,
                    altText: 'Hyperion competing',
                    caption: 'Hyperion competing in the Infinite Recharge Game'
                },
                {
                    imageSrc: hyperionFlag,
                    altText: 'Hyperion with Flag',
                    caption: 'Hyperion posing with the 5431 Flag behind it'
                },
                {
                    imageSrc: OpeningDay2020,
                    altText: 'Opening Day Photo',
                    caption: 'Our team on the first day in our first comp during 2020'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2020'
        },

        2021: {
            gameName: 'Infinite Recharge (continued)',
            imageURL: game2020_21,
            description: 'In 2021, our team continued with the FIRST Infinite Recharge challenge from 2020, adapted for the ongoing COVID-19 pandemic. As there was a current ongoing pandemic during 2021, there is not much events during this time.',
            memoryImages: [
                {
                    imageSrc: group2021,
                    altText: 'Hyperion with Team',
                    caption: 'Our team taking a photo with Hyperion at a competition',
                },
                {
                    imageSrc: zoomPhoto,
                    altText: 'Zoom Meeting with Team',
                    caption: 'Our team in a zoom call meeting during the COVID-19 pandemic'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2021'
        },
        2022: {
            gameName: 'Rapid React',
            imageURL: game2022,
            description: 'This season we have joined The Open Alliance on Chief Delphi. Open Alliance is a group of FRC teams who openly share their process of building robots and connections between FRC teams. We have met with an FLL and FTC team to demonstrate our bot and mentor. Attending both the Waco and Irving district events in Texas we left with a greater appreciation for the teams around us who work together to share practice fields and parts. Our team has also realized how impactful our Imagery and Spirit is to our team and our STEM community. For future years we hope to reach out to organizations and events like Ski Plano and Night At The Ballpark in order to demonstrate our robot and the benefits of FIRST.',
            memoryImages: [
                {
                    imageSrc: Hermes,
                    altText: 'Hermes',
                    caption: 'A photo of Hermes loaded up with 2022 game pieces',
                },
                {
                    imageSrc: HermesAction,
                    altText: 'Hermes in Action',
                    caption: 'Photo of Hermes competing in the Rapid React game'
                },
                {
                    imageSrc: team2022,
                    altText: 'Team photo in 2022',
                    caption: 'A photo of our 2022 members who competed during this year'
                },
                {
                    imageSrc: teamBleachers,
                    altText: '2022 Team in Bleachers',
                    caption: 'Our team in the bleachers at one of our competitions'
                },
                {
                    imageSrc: prototypeBot,
                    altText: 'Prototype Bot',
                    caption: 'A prototype bot was designed during the season'
                },
                {
                    imageSrc: prototypeBotAction,
                    altText: 'Protoype in Action',
                    caption: 'Our prototype in action playing the 2022 game'
                },
                {
                    imageSrc: teamSide2022,
                    altText: 'Side photo of Team 2022',
                    caption: 'A photo taken from the side of our team 5431'
                }
            ],
            learnMoreLink: 'https://www.thebluealliance.com/team/5431/2022'
        },
        2023: {
            gameName: 'Charged Up',
            imageURL: game2023,
            description: 'In 2023, our team competed in the FIRST Charged Up challenge.',
            memoryImages: [
                {
                    imageSrc: team2023,
                    altText: 'Team Photo of 2023',
                    caption: 'A photo of our 2023 members who competed during this year',
                },
                {
                    imageSrc: brontesAction,
                    altText: 'Brontes in Action',
                    caption: 'A photo of Brontes putting down a Charged Up game piece'
                }
            ],
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
            memoryImages: [
                {
                    imageSrc: irisinblue,
                    altText: 'Iris in Blue',
                    caption: 'A photo of Iris in Blue, our 2025 robot'
                },
                {
                    imageSrc: layingdowniris,
                    altText: 'Iris Laying Down',
                    caption: 'A photo of Iris laying down, showing off its components'
                },
                {
                    imageSrc: placingcoral,
                    altText: 'Placing Coral',
                    caption: 'A photo of Iris placing down a coral game piece'
                },
                {
                    imageSrc: irisbeingworkedon,
                    altText: 'Iris being worked on',
                    caption: 'A photo of Iris being worked on by our team members'
                }
            ],
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

 

    return (
        <div className="memories-page">
            
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
                    <div className="memories-descriptor">
                        <p> Travel between the years of 5431 using this Time Machine </p>
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
        </div>
    );
};

export default Memories;