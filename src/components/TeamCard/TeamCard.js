import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components'
import GreenDot from '../../assets/green-circle.png';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

const StyledCard = styled.div`
    position: relative;
    color: #fff;
    background: #212231;
    width: 320px;
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
    margin-top: 1vh;
    font-size: auto;
    width: 100%;
    height: 100%;

`

const BulletWrapper = styled.li`
margin: 0;
padding: 10px 20px;
list-style: none;
background-image: url(${GreenDot});
background-repeat: no-repeat;
background-position: left center;
background-size: 10px;
`
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
console.log(detectMob);


const TeamCard = ({ name, title, image, fact1, fact2, fact3, fact4 }) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 700);
    };


    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (

        <div>
            {isDesktop ? (
                <Flippy
                    flipOnHover={true} // default false
                    flipDirection="vertical" // horizontal or vertical
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                >
                    <FrontSide>
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

                                <ProfilePhoto background={image} />
                            </CardInner>
                        </StyledCard>
                    </FrontSide>
                    <BackSide
                        style={
                            {
                                backgroundColor: '#212231',
                                borderRadius: '0px 30px 30px 30px',
                                color: '#fff',
                                background: '#212231',
                                width: '320px',
                                height: '368px',
                                background: '#212231',
                                boxShadow: '0px 4px 10px #000000',
                                margin: '24px 24px 0 0px'

                            }}>

                        <CardInner>
                            <NameWrapper>
                                <h4>
                                    {name}
                                </h4>
                                <h5>
                                    {title}
                                </h5>
                                <HiddenWrapper>
                                    <ul>
                                        <BulletWrapper>{fact1}</BulletWrapper>
                                        <BulletWrapper>{fact2}</BulletWrapper>
                                        <BulletWrapper>{fact3}</BulletWrapper>
                                        <BulletWrapper>{fact4}</BulletWrapper>
                                    </ul>

                                </HiddenWrapper>
                            </NameWrapper>
                        </CardInner>
                    </BackSide>
                </Flippy>
            ) : (
                    <Flippy
                        flipOnHover={false} // default false
                        flipDirection="vertical" // horizontal or vertical
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    >
                        <FrontSide>
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

                                    <ProfilePhoto background={image} />
                                </CardInner>
                            </StyledCard>
                        </FrontSide>
                        <BackSide
                            style={
                                {
                                    backgroundColor: '#212231',
                                    borderRadius: '0px 30px 30px 30px',
                                    color: '#fff',
                                    background: '#212231',
                                    width: '320px',
                                    height: '368px',
                                    background: '#212231',
                                    boxShadow: '0px 4px 10px #000000',
                                    margin: '24px 24px 0 0px'

                                }}>

                            <CardInner>
                                <NameWrapper>
                                    <h4>
                                        {name}
                                    </h4>
                                    <h5>
                                        {title}
                                    </h5>
                                    <HiddenWrapper>
                                        <ul>
                                            <BulletWrapper>{fact1}</BulletWrapper>
                                            <BulletWrapper>{fact2}</BulletWrapper>
                                            <BulletWrapper>{fact3}</BulletWrapper>
                                            <BulletWrapper>{fact4}</BulletWrapper>
                                        </ul>

                                    </HiddenWrapper>
                                </NameWrapper>
                            </CardInner>
                        </BackSide>
                    </Flippy>
                )}
        </div>
    );
};

export default TeamCard;
