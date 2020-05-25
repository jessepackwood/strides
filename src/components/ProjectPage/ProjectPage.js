import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

const StyledTitle = styled.h1`
font-family: Frank Ruhl Libre;
font-style: normal;
font-weight: 900;
font-size: 58px;
line-height: 75px;
color: #FFFFFF;
margin: 0;
`

const StyledSubtitle = styled(StyledTitle)`
    font-size: 32px;
`
const StyledH4 = styled.h4`
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
`

const ImageWrapper = styled.div`
    display: flex;
    max-width: 760px;
    overflow-x: scroll;
    overflow-y: none;
`

const StyledImage = styled.img`
    height: 517px;
`
const StyledText = styled.p`
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
`

const ProjectPage = ({project}) => {
    return (
        <div>
            <StyledTitle>
                {project.title}
            </StyledTitle>
            <StyledH4>
                {project.work}
            </StyledH4>
            <ImageWrapper>
                <StyledImage src={project.images[0]} alt='project home screen' />
                <StyledImage src={project.images[1]} alt='project home screen' />
                <StyledImage src={project.images[2]} alt='project home screen' />
                <StyledImage src={project.images[3]} alt='project home screen' />
                <StyledImage src={project.images[4]} alt='project home screen' />
            </ImageWrapper>
            <StyledSubtitle>
                Problem
            </StyledSubtitle>
            <StyledText>
                {project.problem}
            </StyledText>
            <StyledSubtitle>
                Solution
            </StyledSubtitle>
            <StyledText>
                {project.solution}
            </StyledText>
            {/* <StyledSubtitle>
                Timeline
            </StyledSubtitle>
            <StyledText>
                {project.timeline}
            </StyledText> */}
        </div>

    );
};

export default ProjectPage;