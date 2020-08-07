import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

import AppStoreLogo from '../../assets/apple-store-app-icon.png'

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
    margin: 35px 0px;
    display: flex;
    max-width: 760px;
    overflow-x: scroll;
    overflow-y: none;
`

const StyledImage = styled.img`
    height: 517px;
    margin-right: 35px;
`
const StyledText = styled.p`
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
`

const Wrapper = styled.div`
    margin-bottom: 25px;

    `
const AppstoreLogo = styled.img`
    height: 6vh;
    margin-top: 3vh;

`
const AppStoreUrl = styled.a`
    display: flex;
`

const ProjectPage = ({ project }) => {

    let imagesToDisplay = project.images.map(image => <StyledImage src={image} alt='project screen' />)
    return (
        <Wrapper>
            <StyledTitle>
                {project.title}
            </StyledTitle>
            <StyledH4>
                {project.work}
            </StyledH4>
            <ImageWrapper>
                {imagesToDisplay}
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
            {/* <AppStoreUrl href={project.appstoreurl} target="blank">
                <AppstoreLogo src={AppStoreLogo}>
                </AppstoreLogo>
            </AppStoreUrl> */}
        </Wrapper>

    );
};

export default ProjectPage;