import { useState } from 'react';
import './memories.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Memories: React.FC = () => {
    const [year, setYear] = useState(2025);
    const [yearMax] = useState(2025);
    const [yearMin] = useState(2015);
    
    const progressPercentage = ((year - yearMin) / (yearMax - yearMin)) * 100;

    return (
        <>
            <div className="memories-container">
                <div className="year-selector">
                    <button onClick={() => year > yearMin ? setYear(year - 1) : setYear(year)} className="year-button">
                        <KeyboardArrowDownIcon sx={{ fontSize: 50 }} style={{color:'#8B1FEA'}}/>
                    </button>
                    <h1 className="year-title">{year}</h1>
                    <button onClick={() => year < yearMax ? setYear(year + 1) : setYear(year)} className="year-button">
                        <KeyboardArrowUpIcon sx={{ fontSize: 50 }} style={{color:'#8B1FEA'}}/>
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
                    <button className="travelbutton">Travel to {year}!</button>
                </div>
            </div>
        </>
    );
};

export default Memories;