import { useEffect, useState } from 'react';
import './memories.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

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

//2015 imports
import botPerformance2015 from '../../assets/img/about/2015/BotDoingStuff.jpg'
import IrvingTeam from '../../assets/img/about/2015/IrvingTeam.jpg'
import NewBotOnTheBlock from '../../assets/img/about/2015/NewBotOnTheBlock.jpg'
import Working2015 from '../../assets/img/about/2015/Working.jpg'

const Memories: React.FC = () => {
    const [traveled, toggleTravel] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    // year related stuff
    const [year, setYear] = useState(2025);
    const yearMax = 2025;
    const yearMin = 2015;
    const progressPercentage = ((year - yearMin) / (yearMax - yearMin)) * 100;
    
    // Function to open image in modal
    const openImageModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };
    
    // Function to close modal
    const closeImageModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
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
            {!traveled &&
                <div className="memories-container">
                    <div className="year-selector">
                        <button onClick={() => year > yearMin ? setYear(year - 1) : setYear(year)} className="year-button">
                            <KeyboardArrowDownIcon sx={{ fontSize: 50 }} style={{ color: '#8B1FEA' }} />
                        </button>
                        <h1 className="year-title">{year}</h1>
                        <button onClick={() => year < yearMax ? setYear(year + 1) : setYear(year)} className="year-button">
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
                        <button className="travelbutton" onClick={() => toggleTravel(!traveled)}>Travel to {year}!</button>
                    </div>
                </div>
            }
            {traveled &&
                <>
                    {year === 2015 &&
                    <div className="year-content">
                        <div className="gameImageContainer">
                            <img 
                                src={game2015} 
                                className="gameImage clickable-image" 
                                alt="2015 Recycle Rush Game" 
                              
                            />
                        </div>
                        
                        <div className="year-description">
                            <h2>2015: Recycle Rush</h2>
                            <p>
                            When the Plano Academy High School (AHS) opened in August of 2015, three students had
                             a goal of creating a robotics team. These three students asked our principal for her
                            permission to start an FRC team. She said NO! So they worked together to start the Titan
                             Robotics Club, building a robot to compete in a local BEST tournament. This only made
                              the team want to join an FRC team more. This only made the students want an FRC team
                               more, so they found mentors and coaches to grow into FRC 5431 Titan Robotics. 
                            The first week of the 2015 competition season brought our team to the Dallas Regional.
                             Competing with world champions like 118, 148, 1477, and 2848 was definitely exciting as
                              5431 came in 10th place, earning us an invitation to the third place alliance! Being
                               the highest ranked rookie seed got us a spot to the St. Louis Championship! The
                                seed started to sprout and we wanted to share it with our community!
                            </p>
                        </div>
                        
                        <div className="memory-gallery">
                            <div className="memory-item">
                                <img 
                                    src={botPerformance2015} 
                                    alt="Robot in action" 
                                    className="memory-image clickable-image" 
                                    onClick={() => openImageModal(botPerformance2015)}
                                />
                                <div className="memory-caption">Our robot performing during competition</div>
                            </div>
                            
                            <div className="memory-item">
                                <img 
                                    src={IrvingTeam} 
                                    alt="Team at Irving" 
                                    className="memory-image clickable-image" 
                                    onClick={() => openImageModal(IrvingTeam)}
                                />
                                <div className="memory-caption">Our Team at the Irving Competition</div>
                            </div>
                            
                            <div className="memory-item">
                                <img 
                                    src={NewBotOnTheBlock} 
                                    alt="New robot design" 
                                    className="memory-image clickable-image" 
                                    onClick={() => openImageModal(NewBotOnTheBlock)}
                                />
                                <div className="memory-caption">Our "New Bot on the Block", first ever robot design</div>
                            </div>
                            
                            <div className="memory-item">
                                <img 
                                    src={Working2015} 
                                    alt="Team working" 
                                    className="memory-image clickable-image" 
                                    onClick={() => openImageModal(Working2015)}
                                />
                                <div className="memory-caption">Team members collaborating on robot construction</div>
                            </div>
                        </div>
                        <footer className="footer">
                            <a href="https://www.thebluealliance.com/team/5431/2015" target="_blank">Learn More About 2015 Season</a>
                        </footer>
                    </div>
                    }

                    {year === 2016 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2016} 
                                className="gameImage clickable-image" 
                                alt="2016 Stronghold Game" 
                                onClick={() => openImageModal(game2016)}
                            />
                        </div>
                    }

                    {year === 2017 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2017} 
                                className="gameImage clickable-image" 
                                alt="2017 Steamworks Game" 
                                onClick={() => openImageModal(game2017)}
                            />
                        </div>
                    }

                    {year === 2018 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2018} 
                                className="gameImage clickable-image" 
                                alt="2018 Power Up Game" 
                                onClick={() => openImageModal(game2018)}
                            />
                        </div>
                    }

                    {year === 2019 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2019} 
                                className="gameImage clickable-image" 
                                alt="2019 Deep Space Game" 
                                onClick={() => openImageModal(game2019)}
                            />
                        </div>
                    }

                    {(year === 2020 || year === 2021) &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2020_21} 
                                className="gameImage clickable-image" 
                                alt="2020-21 Infinite Recharge Game" 
                                onClick={() => openImageModal(game2020_21)}
                            />
                        </div>
                    }

                    {year === 2022 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2022} 
                                className="gameImage clickable-image" 
                                alt="2022 Rapid React Game" 
                                onClick={() => openImageModal(game2022)}
                            />
                        </div>
                    }

                    {year === 2023 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2023} 
                                className="gameImage clickable-image" 
                                alt="2023 Charged Up Game" 
                                onClick={() => openImageModal(game2023)}
                            />
                        </div>
                    }

                    {year === 2024 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2024} 
                                className="gameImage clickable-image" 
                                alt="2024 Crescendo Game" 
                                onClick={() => openImageModal(game2024)}
                            />
                        </div>
                    }

                    {year === 2025 &&
                        <div className="gameImageContainer">
                            <img 
                                src={game2025} 
                                className="gameImage clickable-image" 
                                alt="2025 Reefscape Game" 
                            />
                        </div>
                    }

                    <div className="returnbutton">
                        <button onClick={() => toggleTravel(!traveled)}>Return to Present</button>
                    </div>

                    {/* Image Modal */}
                    {modalImage && (
                        <div className="image-modal" onClick={closeImageModal}>
                            <div className="modal-content">
                                <button className="modal-close" onClick={closeImageModal}>
                                    <CloseIcon />
                                </button>
                                <img src={modalImage} alt="Enlarged view" className="modal-image" />
                            </div>
                        </div>
                    )}
                </>
            }
        </>
    );
};

export default Memories;