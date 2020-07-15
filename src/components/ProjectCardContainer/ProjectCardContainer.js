import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import shiftPhoto from '../../assets/shift-home.png'
import BlossomPhoto from '../../assets/blossom-home.png'
import SportsPhoto from '../../assets/nls-home.png'
import ChallengePhoto from '../../assets/whole-body-challenge-home.png'
import StarvPhoto from '../../assets/starv-home.png'
import EquinePhoto from '../../assets/equine/Equine-home.png'
import styled from 'styled-components'

const projects = [
    { title: 'The Daily Shifts', subtitle: 'Dev + Design', text: 'The Daily Shifts is a mobile app that helps you build soul habits and find your inner peace through creating new daily practices.', image: shiftPhoto, link: '/work/the-daily-shift', realink: 'htpps://www.google.com', },
    { title: 'Blossom', subtitle: 'Dev + Design', text: 'Blossom is a mobile app that helps you connect with people around you and invite them to have fun.', image: BlossomPhoto, link: '/work/blossom' },
    // { title: 'EquineTrader', subtitile: 'Dev + Design', text: 'EquineTrader is an app that blah blah blah ', image: EquinePhoto, link: '/work/equine-trader' },
    { title: 'Next Level Sports', subtitle: 'Dev + Design', text: ' Next Level Sports is an iOS app that allows you to live stream and record stats from your favorite sporting events.', image: SportsPhoto, link: '/work/next-level-sports' },
    { title: 'Whole Body Challenge', subtitle: 'Dev + Design', text: 'The Whole Body Challenge allows users to track their weight loss for a chance to win $100,000!', image: ChallengePhoto, link: '/work/whole-body-challenge' },
    { title: 'Starv', subtitle: 'Design only', text: 'Starv is a web based application that allows anyone to connect with their favorite celebrities. ', image: StarvPhoto, link: '/work/starv' }
]

const ProjectsWrapper = styled.div`
    max-width: 760px;
    margin: 60px auto 50px;
    background: transparent;
    margin-top: -40px;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`

const CardWrapper = styled.div`
    height: auto;
    display: flex;
    width: 100%;
`

class ProjectCardContainer extends React.Component {
    render() {

        const cardsToDisplay = projects.map((project, index) => {
            return <CardWrapper>
                <ProjectCard
                    title={project.title}
                    text={project.text}
                    image={project.image}
                    subtitle={project.subtitle}
                    position={index % 2 ? 'auto' : '0'}
                    link={project.link}
                />
            </CardWrapper>
        })

        return (
            <ProjectsWrapper>
                {cardsToDisplay}
            </ProjectsWrapper>
        )
    }

}


export default ProjectCardContainer