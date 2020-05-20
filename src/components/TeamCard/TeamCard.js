import React from 'react';
import styled from 'styled-components'
import GreenDot from '../../assets/green-circle.png'

const StyledCard = styled.div`
    position: relative;
    color: #fff;
    background: #212231;
    width: 288px;
    height: 341px;
    background: #212231;
    box-shadow: 0px 4px 10px #000000;
    border-radius: 0px 30px 30px 30px;
    margin: 25px 25px 25px 0px;
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
`

const TeamCard = ({name, title, image}) => {
    return (
        <StyledCard >
            <CornerDot />
            <NameWrapper>
                <h4>
                    {name}
                </h4>
                <h5>
                    {title}
                </h5>
            </NameWrapper>

            
            <ProfilePhoto background={image} />
        </StyledCard>
    );
};

export default TeamCard;