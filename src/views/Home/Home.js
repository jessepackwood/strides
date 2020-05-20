import React from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import starOne from '../../assets/Star-1.png'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'
import TeamContainer from '../../components/TeamContainer/TeamContainer'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FAQ from '../../components/FAQ/FAQ'

const HomeWrapper = styled.div`
    background-color: #08090F;
    margin: 0;
    padding: 0 50px;
    /* max-width: 760px; */

`

const StyledHomeTitle = styled.h1`
    max-width: 760px;
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 70px;

    /* Neutral / White */
    color: #FFFFFF;
    padding: 60px 0 30px 0;
    margin: 0 auto;
`

const StyledH1 = styled.h1`
    max-width: 760px;
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 70px;

    /* Neutral / White */
    color: #FFFFFF;
    margin: 0 auto;
    padding: 0;
`
const StyledSubtitle = styled.p`
    color: #fff;
    font-family: 'Frank Ruhl Libre';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    max-width: 448px;
`

const StyledPaintSpot = styled.img`
    height: 496px;
    width: 499;
    position: absolute;
    z-index: -1;
`
const Spacer = styled.div`
    height: 300px;
`
const SmallSpacer = styled.div`
    height: 30px;
`

const LinkWrapper = styled.div`
    max-width: 760px;
    margin: 0 auto;
`

const Home = () => (
    <div>
        <Header />
        <HomeWrapper>
        
        <StyledHomeTitle>
            We turn your ideas into apps
        </StyledHomeTitle>
        <LinkWrapper>
            <ActionLink text='Get A Quote' url='/contact'/>
        </LinkWrapper>
        <Spacer />
        <StyledH1>
            Our work
        </StyledH1>
        <LinkWrapper>
            <StyledSubtitle>
                Check out a few of our recent projects
            </StyledSubtitle>
        </LinkWrapper>
        <ProjectCardContainer />
        <StyledH1>
            Why us?
        </StyledH1>
        <LinkWrapper>
        <StyledSubtitle>
            You deserve better than a one-size-fits-all option. Our agency's capabilities are focused around one thing – creating amazing apps. 
        </StyledSubtitle>
        </LinkWrapper>
        <LinkWrapper>
            <ActionLink text='Contact us' url='/contact' />
        </LinkWrapper>
        <SmallSpacer />
        <StyledH1>
            The team
        </StyledH1>
        <TeamContainer />
        <StyledH1>
            FAQ
        </StyledH1>
        <FAQ />
        
        </HomeWrapper>
        <Footer />
    </div>
    
)

export default Home