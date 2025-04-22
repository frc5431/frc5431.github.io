import { useState } from 'react';
import './memories.css';

const Memories: React.FC = () => {
    const [year, setYear] = useState(2025);
    const [yearMax] = useState(2025);
    const [yearMin] = useState(2015);

    return (
        <>
            <div className="memories-container">
                <div className="year-selector">
                    <button onClick={() => year > yearMin ? setYear(year - 1) : setYear(year)}>decrease</button>
                    <h1 className="year-title">{year}</h1>
                    <button onClick={() => year < yearMax ? setYear(year + 1) : setYear(year)}>increase</button>
                </div>
            </div>

        </>
    );
};

export default Memories;