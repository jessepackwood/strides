import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import BlossomPhoto from '../../assets/iPhone-X-Clay.png'
import SportsPhoto from '../../assets/iPhone-X-sports.png'
import styled from 'styled-components'

const projects = [
    {title: 'Blossom', subtitle: 'Dev + Design', text: 'Blossom is a mobile app that helps you connect with people around you and invite them to have fun.', image: BlossomPhoto},
    {title: 'Next Level Sports', subtitle: 'Dev + Design', text: ' Next Level Sports is an iOS app that allows you to live stream and record stats from your favorite sporting events.', image: SportsPhoto},
    {title: 'Whole Body Challenge', subtitle: 'Dev + Design', text: 'The Whole Body Challenge presented by New U allowed users to track their weight loss weekly for a chance to win $100,000'}
]

const ProjectsWrapper = styled.div`
    max-width: 760px;
    margin: 0 auto 50px;
    background: transparent;
`

const CardWrapper = styled.div`
    height: auto;
    display: flex;
    width: 100%;
`

class ProjectCardContainer extends React.Component { 
    render() {

        const cardsToDisplay = projects.map( (project, index) => {
                return <CardWrapper><ProjectCard title={project.title} text={project.text} image={project.image} subtitle={project.subtitle} position={index % 2 ? 'auto' : '0'}/></CardWrapper>
            })
        return  (
            <ProjectsWrapper>
                {cardsToDisplay}
            </ProjectsWrapper>
        )
    }

}


export default ProjectCardContainer