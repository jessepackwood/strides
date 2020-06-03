import React from 'react';
import styled from 'styled-components'
import GreenDot from '../../assets/green-circle.png'

const StyledCard = styled.div`
    position: relative;
    color: #fff;
    background: #212231;
    width: calc(50% - 24px);
    height: 368px;
    background: #212231;
    box-shadow: 0px 4px 10px #000000;
    border-radius: 0px 30px 30px 30px;
    margin: 24px 24px 0 0px;

    &:before{
        content: "";
        left: -10px;
        top: -10px;
        background-color: #66E0B9;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        position: absolute;
    }
`

const CardInner = styled.div`
    overflow: hidden;
    height: 100%;
    border-bottom-left-radius: 30px;
`
const NameWrapper = styled.div`
    padding: 24px;
    position: relative;

    h4{
        font-size: 24px;
        margin: 0;
    }

    h5{
        margin: 8px 0 0; 
    }
`

const ProfilePhoto = styled.div`
    height: 300px;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 0px 30px 0px 30px;
    background-image: ${props => `url(${props.background})`};
`

const HiddenWrapper = styled.ul`
    display: none;
    list-style-image: GreenDot;
`
const BulletWrapper = styled.li`
`

const TeamCard = ({name, title, image}) => {
    return (
        <StyledCard >
           <CardInner>
                <NameWrapper>
                    <h4>
                        {name}
                    </h4>
                    <h5>
                        {title}
                    </h5>
                </NameWrapper>
                <HiddenWrapper>
                    <BulletWrapper> One </BulletWrapper>
                    <BulletWrapper> Two </BulletWrapper>
                    <BulletWrapper> Three </BulletWrapper>
                </HiddenWrapper>
                
                <ProfilePhoto background={image} />
           </CardInner>
        </StyledCard>
    );
};

export default TeamCard;