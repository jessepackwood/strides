import React from 'react'
import styled from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'

const StyledCard = styled.div`
    max-width: 504px;
    color: #fff;
    display: flex;
    height: auto;
    margin-bottom: 20px;
    background: #212231;
    box-shadow: 0px 4px 10px #000000;
    border-radius: 0px 30px 30px 30px;
    padding: 15px;
    margin-left: ${props => props.position};
`
const TextWrapper = styled.div`
    width: 50%;
    height: auto;
`
const ImageWrapper = styled.div`
    width: 50%;
    height: auto;
    margin-left: 25px;
`
const StyledImg = styled.img`
    height: 313px;
    width: auto;
`

const StyledTitle = styled.h1`
font-family: Frank Ruhl Libre;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 41px;
color: #FFFFFF;
margin: 0;
`

const StyledSubtitle = styled.div`
    font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
color: #FFFFFF;
`

const StyledText = styled.p`
font-family: Frank Ruhl Libre;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
`

const ProjectCard = ({ title, text, image, subtitle, position}) => (
    <StyledCard position={position}>
        <TextWrapper>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledSubtitle>
                {subtitle}
            </StyledSubtitle>
            <StyledText>
                {text}
            </StyledText>
            <ActionLink text='Read more' url='/work' />
        </TextWrapper>
        <ImageWrapper>
            <StyledImg src={image} alt='phone display' />
        </ImageWrapper>
    </StyledCard>
)

export default ProjectCard