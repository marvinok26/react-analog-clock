import React, { useEffect } from 'react';
import '../css/Home.css';
import clockImage from '../images/clock.png';

const Home = () => {
    useEffect(() => {
        const degree = 6;
        const hr = document.querySelector('#hr');
        const min = document.querySelector('#min');
        const sec = document.querySelector('#sec');

        const updateClock = () => {
            const date = new Date();
            const hh = date.getHours() * 30;
            const mm = date.getMinutes() * degree;
            const ss = date.getSeconds() * degree;

            if (hr) hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            if (min) min.style.transform = `rotateZ(${mm}deg)`;
            if (sec) sec.style.transform = `rotateZ(${ss}deg)`;
        };

        const intervalId = setInterval(updateClock, 1000);

        // Initial call to set the time immediately
        updateClock();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="clock">
                <div className="clock-bg">
                    <img src={clockImage} alt="clock background" />
                </div>
                <div className="hour">
                    <span className="hr" id="hr"></span>
                </div>
                <div className="minute">
                    <span className="min" id="min"></span>
                </div>
                <div className="second">
                    <span className="sec" id="sec"></span>
                </div>
            </div>
        </div>
    );
};

export default Home;
