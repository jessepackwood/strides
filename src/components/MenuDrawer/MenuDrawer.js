import React from 'react';
import { globalTheme } from '../../theme/theme'
import styled, { ThemeProvider } from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import StyledHamburger from '../../components/Hamburger/Hamburger'
import { Link } from 'react-router-dom'

const StyledDrawer = styled.div`
    position: fixed;
    top: 0;
    color: #fff;
    background-color: #08090F;
    width: 100%;
    z-index: 2;
    left: 0;
    box-sizing: border-box;
    height: 100%;
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
    display: flex;
`

const Spacer = styled.div`
    height: 32px;
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


const MenuDrawer = ({toggleMenu}) => {
    return (
        <ThemeProvider theme={globalTheme}>
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
                </DrawerInner>
            </StyledDrawer>
        </ThemeProvider>

    );
};

export default MenuDrawer;