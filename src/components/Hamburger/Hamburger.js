import React from 'react';
import styled from 'styled-components'
import './Hamburger.css'

const Hamburger = ({toggleMenu}) => {
    return (
        <div className='nav-icon' onClick={toggleMenu}>
            <div></div>
        </div>
    );
};

export default Hamburger;