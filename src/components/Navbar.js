import React from 'react';
import user from '../img/user.png';

const Navbar = ({ life, gold, round, stage, text }) => {
    const maxLife = 100; // Assuming the maximum life is 100
    const bloodSquareHeight = (life / maxLife) * 100; // Calculate the height percentage based on current life

    return (
        <div className='d-flex'>
            <div className='dark-brown normalsquare d-flex justify-content-center align-items-center border border-black'>
                <img className="user-icon " src={user} alt="user" />
            </div>
            <div className='dark-brown normalsquare life-square d-flex justify-content-center align-items-center'>
                <h1 className='user-life color-p'>{life}</h1>
                <div className='blood-square' style={{ height: `${bloodSquareHeight}%` }}></div>
            </div>
            <div className='goldsquare yellow d-flex justify-content-center align-items-center'>
                <h1 className='color-b user-gold'>{gold}</h1>
            </div>

            <div className='pink bigsquare d-flex justify-content-center align-items-center'>
                <h1 className='title '>{text}</h1>
            </div>
            <div className='blue bluesquare divStage'>
                <h1 className='user-stage'>Stage {stage}</h1>
                <h1 className='user-stage'>Round {round}</h1>
            </div>
        </div>
    );
};

export default Navbar;