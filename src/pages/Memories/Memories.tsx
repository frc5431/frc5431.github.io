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

//2015 imports
import botPerformance2015 from '../../assets/img/about/2015/BotDoingStuff.jpg'
import IrvingTeam from '../../assets/img/about/2015/IrvingTeam.jpg'
import NewBotOnTheBlock from '../../assets/img/about/2015/NewBotOnTheBlock.jpg'
import Working2015 from '../../assets/img/about/2015/Working.jpg'

const Memories: React.FC = () => {
    const [traveled, toggleTravel] = useState(false);

    // year related stuff
    const [year, setYear] = useState(2025);
    const yearMax = 2025;
    const yearMin = 2015;
    const progressPercentage = ((year - yearMin) / (yearMax - yearMin)) * 100;

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
                    <div>
                        <div className="gameImageContainer">
                            <img src={game2015} className="gameImage"></img>
                        </div>
                        <img src={botPerformance2015}></img>
                        <img src={IrvingTeam}></img>
                        <img src={NewBotOnTheBlock}></img>
                        <img src={Working2015}></img>
                    </div>
                    }

                    {year === 2016 &&
                        <div className="gameImageContainer">
                            <img src={game2016} className="gameImage"></img>
                        </div>
                    }

                    {year === 2017 &&
                        <div className="gameImageContainer">
                            <img src={game2017} className="gameImage"></img>
                        </div>
                    }

                    {year === 2018 &&
                        <div className="gameImageContainer">
                            <img src={game2018} className="gameImage"></img>
                        </div>
                    }

                    {year === 2019 &&
                        <div className="gameImageContainer">
                            <img src={game2019} className="gameImage"></img>
                        </div>
                    }

                    {(year === 2020 || year === 2021) &&
                        <div className="gameImageContainer">
                            <img src={game2020_21} className="gameImage"></img>
                        </div>
                    }

                    {year === 2022 &&
                        <div className="gameImageContainer">
                            <img src={game2022} className="gameImage"></img>
                        </div>
                    }

                    {year === 2023 &&
                        <div className="gameImageContainer">
                            <img src={game2023} className="gameImage"></img>
                        </div>
                    }

                    {year === 2024 &&
                        <div className="gameImageContainer">
                            <img src={game2024} className="gameImage"></img>
                        </div>
                    }

                    {year === 2025 &&
                        <div className="gameImageContainer">
                            <img src={game2025} className="gameImage"></img>
                        </div>
                    }

                    <div className="returnbutton">
                        <button onClick={() => toggleTravel(!traveled)}>Return to Present</button>
                    </div>
                </>
            }
        </>
    );
};

export default Memories;