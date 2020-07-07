import React from 'react'
import styled from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import {Link} from 'react-router-dom'

const StyledCard = styled.div`
    margin-left: ${props => props.position};
    position: relative;
    margin-top: 80px;
    &:before{
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        left: -10px;
        top: -10px;
        background-color: #66E0B9;
        border-radius: 50%;
        z-index: 1;
    }
`

const CardContentWrapper = styled.div`
    display: flex;
    overflow: hidden;
    height: 100%;
    position: relative;
    max-width: 504px;
    color: #fff;
    height: 65vh;
    background: #212231;
    box-shadow: 0px 4px 10px #000000;
    border-radius: 0px 30px 30px 30px;
    padding: 32px;
    min-height: 348px;
    box-sizing: border-box;

    @media (min-width: 768px){
        max-width: 700px;
    };

    
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100%;
        padding: 24px;
        
    };
`
const TextWrapper = styled.div`
    width: 50%;
    height: auto;
`
const ImageWrapper = styled.div`
    width: 50%;
    height: auto;
    @media (max-width: 500px) {
        margin: inherit;
        display: flex;
    }
`
const StyledImg = styled.img`
    height: auto;
    width: 50%;
    max-width: 290px;
    position: absolute;
    margin-left: 3vw;
    @media (max-width: 500px) {
        width: 100%;
        height: auto;
        margin: 16px 0 0;
    }
`

const StyledTitle = styled.h1`
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 41px;
    color: #FFFFFF;
    @media (max-width: 500px) {
        width: 220px;
    }
`

const StyledSubtitle = styled.div`
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 2vh;
`

const StyledText = styled.p`
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 5vh;
    margin-top: 5vh;
    @media (max-width: 500px) {
        display: none;
}
`
const LinkWrapper = styled.div`
    @media (max-width: 500px) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    :visted {

    }
`
class ProjectCard extends React.Component {

    state = {
        cardOpened: false,
    }

    handleCard = () => {

    }

        render () {
            return (
                
            <StyledCard position={this.props.position}>
                <CardContentWrapper>
                    <TextWrapper>
                        <StyledTitle>
                            {this.props.title}
                        </StyledTitle>
                        <StyledSubtitle>
                            {this.props.subtitle}
                        </StyledSubtitle>
                        <StyledText>
                            {this.props.text}
                        </StyledText>
                        <LinkWrapper>
                            <ActionLink text='Read more' url={this.props.link} />
                        </LinkWrapper>
                    </TextWrapper>
                    
                        <ImageWrapper>
                        <StyledLink to={this.props.link}>
                            <StyledImg src={this.props.image} alt='phone display' />
                            </StyledLink>
                        </ImageWrapper>
                    
                </CardContentWrapper>
            </StyledCard>
            
            )
        }
}

export default ProjectCard
