import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'
import TeamContainer from '../../components/TeamContainer/TeamContainer'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FAQ from '../../components/FAQ/FAQ'

const HomeWrapper = styled.div`
    background-color: #08090F;
    margin: 0;
    padding: 0 50px 100px;
    max-width: 760px;
    margin: 0 auto;

    @media (max-width: 500px) {
        padding: 100px 0;
    }     
`

const BannerWrapper = styled.div`
    height: calc(100vh - 72px);
    margin: 0 auto;
    margin-top: 200px;
    @media (max-width: 500px) {
        margin-top: 50px;
        padding: 0 25px;
    }
`

const StyledHomeTitle = styled.h1`
    max-width: 448px;
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 70px;
    color: #FFFFFF;
    margin: 0 0 48px;
`

const StyledH2 = styled.h2`
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 70px;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`
const StyledSubtitle = styled.p`
    color: #fff;
    font-family: 'Frank Ruhl Libre';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    margin: 16px 0;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`

const AboutWrapper = styled.div`
    height: calc(80vh);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
`

const SmallSpacer = styled.div`
    height: 30px;
`

const LinkWrapper = styled.div`
    margin: 16px 0 0;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`

const Home = () => (
    <div>
        <Header />
        <HomeWrapper>
        <BannerWrapper>
                <StyledHomeTitle>
                    We turn your ideas into apps
                </StyledHomeTitle>
                <ActionLink text='Get A Quote' url='/contact'/>
        </BannerWrapper>
        <StyledH2>
            Our work
        </StyledH2>
            <StyledSubtitle>
                Check out a few of our recent projects
            </StyledSubtitle>

        <ProjectCardContainer />
        <AboutWrapper>
            <StyledH2>
                Why us?
            </StyledH2>
            <StyledSubtitle>
                You deserve better than a one-size-fits-all option. Our agency's capabilities are focused around one thing – creating amazing apps. 
            </StyledSubtitle>
            <LinkWrapper>
                <ActionLink text='Contact us' url='/contact' />
            </LinkWrapper>
        </AboutWrapper>
        <SmallSpacer />
        <SmallSpacer />
        <StyledH2>
            The team
        </StyledH2>
        <TeamContainer />
        <StyledH2>
            FAQ
        </StyledH2>
        <FAQ />
        
        </HomeWrapper>
        <Footer />
    </div>
    
)

export default Home