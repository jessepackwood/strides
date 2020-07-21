import React from 'react';
import { globalTheme } from '../../theme/theme'
import styled, { ThemeProvider } from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import StyledHamburger from '../../components/Hamburger/Hamburger'
import { Link } from 'react-router-dom'

import UpworkLogo from '../../assets/icon-linkedin.png'
import LinkedinLogo from '../../assets/icon-upwork.png'

import { useState, useEffect } from 'react';

const StyledDrawer = styled.div`
    position: fixed;
    top: 0;
    color: #fff;
    background-color: #08090F;
    width: 100vw;
    z-index: 2;
    left: 0;
    box-sizing: border-box;
    height: 100vh;
    overflow: auto;

    @media(max-width: 768px){
        padding: 32px 32px 64px;
    }
`

const DrawerInner = styled.div`
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
`

const CloseBtnWrapper = styled.div`

    width: 100%;
    height: 10vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Spacer = styled.div`
    height: 35px;
`

const SpacerLarge = styled.div`
    height: 64px;
`

const MenuTitle = styled.h2`
    font-family: ${props => props.theme.font.frank};
    margin: 0 0 25px 0;
    font-size: 40px;
    color: #fff;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    :visited {
        color: ${props => props.theme.dark.bg}
    }
`

const StyledExternalLink = styled.a`
    text-decoration: none;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const MenuItem = styled.h4`
    font-family: ${props => props.theme.font.muli};
    font-size: 20px;
    line-height: 25px;
    text-decoration: none;
    color: #fff;
    margin-bottom: 20px;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
    :visited {
        color: ${props => props.theme.dark.bg}
    }
`

const SocialProfile = styled.a`
width: 116px;
height: 25px;
font-family: Muli;
font-style: normal;
font-weight: 900;
font-size: 14px;
color: #66E0B9;
text-decoration: none;
margin-right: 5vw;
`

const LogoWrapper = styled.a`


`

const SocialLogo = styled.img`
height: 50px;
margin-right: 20px;
border-radius: 10px;

 `




const MenuDrawer = ({ toggleMenu }) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 780);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 780);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            {isDesktop ? (
                <div> <ThemeProvider theme={globalTheme}>
                    <StyledDrawer>
                        <DrawerInner>

                            <CloseBtnWrapper>
                                <StyledHamburger toggleMenu={toggleMenu}>
                                    Close
                    </StyledHamburger>
                                <div>
                                   <LogoWrapper href={'//www.linkedin.com/company/stridesdev'} target="_blank"  >
                                    <SocialLogo src={UpworkLogo} alt='upwork logo' />   
                                    </LogoWrapper>
                                    <LogoWrapper href={'//www.upwork.com/ag/strides/'} target="_blank">
                                    <SocialLogo src={LinkedinLogo}  alt="linkedin logo" />
                                    </LogoWrapper>
                                </div>
                            </CloseBtnWrapper>

                            <MenuTitle>
                                Work
                </MenuTitle>
                            <StyledLink to='/work/the-daily-shift'>
                                <MenuItem onClick={toggleMenu}>
                                    The Daily Shift
                    </MenuItem>
                            </StyledLink>
                            <StyledLink to='/work/blossom'>
                                <MenuItem onClick={toggleMenu}>
                                    Blossom
                    </MenuItem>
                            </StyledLink>
                            <StyledLink to='/work/whole-body-challenge'>
                                <MenuItem onClick={toggleMenu}>
                                    Whole Body Challenge
                    </MenuItem>
                            </StyledLink>
                            <StyledLink to='/work/next-level-sports'>
                                <MenuItem onClick={toggleMenu}>
                                    Next Level Sports
                    </MenuItem>
                            </StyledLink>
                            <StyledLink to='/work/starv'>
                                <MenuItem onClick={toggleMenu}>
                                    Starv
                    </MenuItem>
                            </StyledLink>
                            <StyledLink to='/work/equine-trader'>
                                <MenuItem onClick={toggleMenu}>
                                    Equine Trader
                    </MenuItem>
                            </StyledLink>
                            <MenuTitle>
                                Contact
                </MenuTitle>
                            <ActionLink text='info@strides.com' url='mailto:info@strides.com' />
                            <Spacer />
                            <ActionLink text='(208) 227-4479' url='tel:(208) 227-4479' />
                        </DrawerInner>
                    </StyledDrawer>
                </ThemeProvider></div>
            ) : (
                    <div> <ThemeProvider theme={globalTheme}>
                        <StyledDrawer>
                            <DrawerInner>
                                <CloseBtnWrapper>
                                    <StyledHamburger toggleMenu={toggleMenu}>
                                        Close
                    </StyledHamburger>
                                </CloseBtnWrapper>
                                <MenuTitle>
                                    Work
                </MenuTitle>
                                <StyledLink to='/work/the-daily-shift'>
                                    <MenuItem onClick={toggleMenu}>
                                        The Daily Shift
                    </MenuItem>
                                </StyledLink>
                                <StyledLink to='/work/blossom'>
                                    <MenuItem onClick={toggleMenu}>
                                        Blossom
                    </MenuItem>
                                </StyledLink>
                                <StyledLink to='/work/whole-body-challenge'>
                                    <MenuItem onClick={toggleMenu}>
                                        Whole Body Challenge
                    </MenuItem>
                                </StyledLink>
                                <StyledLink to='/work/next-level-sports'>
                                    <MenuItem onClick={toggleMenu}>
                                        Next Level Sports
                    </MenuItem>
                                </StyledLink>
                                <StyledLink to='/work/starv'>
                                    <MenuItem onClick={toggleMenu}>
                                        Starv
                    </MenuItem>
                                </StyledLink>
                                <StyledLink to='/work/equine-trader'>
                                    <MenuItem onClick={toggleMenu}>
                                        Equine Trader
                    </MenuItem>
                                </StyledLink>
                                <MenuTitle>
                                    Contact
                </MenuTitle>
                                <ActionLink text='info@strides.com' url='mailto:info@strides.com' />
                                <Spacer />
                                <ActionLink text='(208) 227-4479' url='tel:(208) 227-4479' />
                                <Spacer />
                                <LogoWrapper href={'//www.linkedin.com/company/stridesdev'} target="_blank"  >
                                    <SocialLogo src={UpworkLogo} alt='upwork logo' />   
                                    </LogoWrapper>
                                    <LogoWrapper href={'//www.upwork.com/ag/strides/'} target="_blank">
                                    <SocialLogo src={LinkedinLogo}  alt="linkedin logo" />
                                    </LogoWrapper>
                                {/* <StyledLink>
                                <SocialProfile href={'//www.linkedin.com/company/stridesdev'} target="_blank" > Linkedin </SocialProfile>
                                </StyledLink>
                                <SocialProfile href={'//www.upwork.com/ag/strides/'} target="_blank" > UpWork </SocialProfile> */}
                            </DrawerInner>
                        </StyledDrawer>
                    </ThemeProvider></div>
                )}
        </div>
    )
};

export default MenuDrawer;