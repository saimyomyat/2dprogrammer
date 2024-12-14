import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WinningNumbers = () => {
    const [liveTword, setLiveTword] = useState('');
    const [resultIndexTword, setResultIndexTword] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.thaistock2d.com/live');
                const data = response.data;

                // console.log(data.result)

                // Extracting the required fields
                setLiveTword(data.live?.twod || 'N/A');
                setResultIndexTword(data.result?.[3]?.twod || 'N/A');
            } catch (err) {
                setError('Failed to load data from API');
                console.error(err);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 1000); // Fetch data every second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // console.log(liveTword);


    return (
        <div>
            <h1>Thailand 2D Winning Numbers</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <p><strong>Live Tword:</strong> {resultIndexTword !== '--' ? resultIndexTword : liveTword}</p>
                {/* <p><strong>Result Index1 Tword:</strong> {resultIndexTword}</p> */}
            </div>
        </div>
    );
};

export default WinningNumbers;

