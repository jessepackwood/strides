import React from 'react';
import './Hamburger.css'
import Logo from '../../assets/Teal.png'
import styled from 'styled-components'
import BackArrow from '../../assets/realback_arrow.png'


const StyledLogo = styled.img`
  height: 30px;
  width: 30px;

 
`

const Hamburger = ({ toggleMenu }) => {
    return (
        <div>
           
            <StyledLogo src={BackArrow} onClick={toggleMenu}/>
            <StyledLogo src={Logo} alt='strides logo' onClick={toggleMenu}/>
           
        </div>
    );
};

export default Hamburger;