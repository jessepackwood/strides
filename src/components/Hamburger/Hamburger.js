import React from 'react';
import './Hamburger.css'

const Hamburger = ({toggleMenu}) => {
    return (
        <div className='nav-icon' onClick={toggleMenu}>
            <div></div>
        </div>
    );
};

export default Hamburger;