import React from 'react';
import { globalTheme } from '../../theme/theme'
import styled, { ThemeProvider } from 'styled-components'
import Logo from '../../assets/Teal.png'

const FooterWrapper = styled.div`
    background-color: ${props => props.theme.dark.footerBG};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85px;
    width: 100%;
    position: absolute;
    bottom: 0;
`

const FooterTitle = styled.p`
    font-family: ${props => props.theme.font.muli};
    font-weight: 900;
    font-size: 10px;
    color: #fff;
`

const StyledLogo = styled.img`
    height: 40px;
    width: 48px;
    margin-top: 5px;
`

const Footer = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <FooterWrapper>
                <StyledLogo src={Logo} alt='strides logo' />
                <FooterTitle>
                    STRIDES
                </FooterTitle>
            </FooterWrapper>
        </ThemeProvider>
    );
};

export default Footer;