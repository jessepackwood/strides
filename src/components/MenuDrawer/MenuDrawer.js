import React from 'react';
import { globalTheme } from '../../theme/theme'
import styled, { ThemeProvider } from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import StyledHamburger from '../../components/Hamburger/Hamburger'
import { Link } from 'react-router-dom'

const StyledDrawer = styled.div`
    max-width: 760px;
    position: absolute;
    top: 0;
    right: 25px;
    color: #fff;
    background-color: ${props => props.theme.dark.bg};
    border: 1px solid ${props => props.theme.dark.green};
    padding: 20px;
`

const CloseBtnWrapper = styled.div`
    width: 100%;
    display: flex;
`

const MenuTitle = styled.h2`
    font-family: ${props => props.theme.font.frank};
    margin-top: 0;
    font-size: 40px;
    color: #fff;
`

const StyledLink = styled(Link)`
    :visited {
        color: ${props => props.theme.dark.bg}
    }
`

const MenuItem = styled.h4`
    font-family: ${props => props.theme.font.muli};
    font-size: 20px;
    line-height: 25px;
    text-decoration: none;
    color: #fff;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`


const MenuDrawer = ({toggleMenu}) => {
    return (
        <ThemeProvider theme={globalTheme}>
            <StyledDrawer>
                <CloseBtnWrapper>
                    <StyledHamburger toggleMenu={toggleMenu}>
                        Close
                    </StyledHamburger>
                </CloseBtnWrapper>
                <MenuTitle>
                    Work
                </MenuTitle>
                <StyledLink to='/work/the-daily-shift'>
                    <MenuItem>
                        The Daily Shift
                    </MenuItem>
                </StyledLink>
                <MenuItem>
                    Blossom
                </MenuItem>
                <MenuItem>
                    Whole Body Challenge
                </MenuItem>
                <MenuItem>
                    Next Level Sports
                </MenuItem>
                <MenuItem>
                    Starv
                </MenuItem>
                <ActionLink text='Contact' url='/contact' />
            </StyledDrawer>
        </ThemeProvider>

    );
};

export default MenuDrawer;