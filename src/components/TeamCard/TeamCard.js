import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components'
import GreenDot from '../../assets/green-circle.png'

const StyledCard = styled.div`
    position: relative;
    color: #fff;
    background: #212231;
    width: 288px;
    /* height: 341px; */
    background: #212231;
    box-shadow: 0px 4px 10px #000000;
    border-radius: 0px 30px 30px 30px;
    margin: 25px 25px 25px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const NameWrapper = styled.div`
    padding: 10px;
`

const ProfilePhoto = styled.div`
    height: 220px;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 0px 30px 0px 30px;
    background-image: ${props => `url(${props.background})`};
`

const CornerDot = styled.img.attrs({
    src: GreenDot
})`
    height: 15px;
    width: 15px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
`

const StyledTitle = styled.h4`
    color: #fff;
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
`

const StyledSubtitle = styled(StyledTitle)`
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin-top: 5px;
`

const HiddenWrapper = styled.ul`
    margin-top: 0;
    list-style-image: GreenDot;
`
const BulletWrapper = styled.li`
`

class TeamCard extends React.Component {

    state = {
        expanded: false
    }

    expandCard = () => {
        console.log('expand')
        this.setState({ expanded: !this.state.expanded })
    }

    render () {
        return (
            <StyledCard >
                <CornerDot onClick={this.expandCard} />
                <NameWrapper>
                    <StyledTitle>
                        {this.props.name}
                    </StyledTitle>
                    <StyledSubtitle>
                        {this.props.title}
                    </StyledSubtitle>
                </NameWrapper>
                { !!this.state.expanded &&
                    <HiddenWrapper>
                        <BulletWrapper> One </BulletWrapper>
                        <BulletWrapper> Two </BulletWrapper>
                        <BulletWrapper> Three </BulletWrapper>
                    </HiddenWrapper>
                }

                
                <ProfilePhoto background={this.props.image} />
            </StyledCard>
        );
    }
};

export default TeamCard;