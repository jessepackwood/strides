import React from 'react';
import TeamCard from '../TeamCard/TeamCard'
import styled from 'styled-components'
import austin_img from '../../assets/team/austin_img.jpg'
import brian_img from '../../assets/team/brian_img.png'
import gaje_image from '../../assets/team/gaje_img.jpg'
import drew_img from '../../assets/team/drew_img.jpg'
import jesse_img from '../../assets/team/jesse_img.JPG'
import ben_img from '../../assets/team/ben_img.jpeg'


const team = [
    { name: 'Austin Betzer', title: 'iOS Developer', },
    { name: 'Andrew Carver', title: 'Android Developer' },
    { name: 'Brian Clay', title: 'Designer' },
    { name: 'Drew Carver', title: 'iOS Developer' },
    { name: 'Gaje Robarge', title: 'Web Developer' },
    { name: 'Jesse Packwood', title: 'Web Developer' },
    { name: 'Ben Kimble', title: 'Backend Developer - AWS Guru' }
]

const TeamWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    max-width: 760px;
    margin: 25px auto 80px;
    padding: 0;
    @media (max-width: 500px) {
        margin: 25px auto 200px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        width: 320px;
    }
`

class TeamContainer extends React.Component {
    render() {

        return (
            <TeamWrapper>
                <TeamCard name='Austin Betzer' title='iOS Developer' image={austin_img} fact1='4 years of experience' fact2='Taken 6 iOS apps live' fact3='Loves hiking and skiing' fact4='Excited for Mulan' />
                <TeamCard name='Brian Clay' title='Designer' image={brian_img} fact1='Can ride a unicycle' fact2='Has done a 300 ft rappel' fact3='One time did a barrel role while tubing' fact4="Is the only designer that doesn't like Photoshop" />
                <TeamCard name='Drew Carver' title='iOS Developer' image={drew_img} fact1='Have worked on large-scale apps, including for power utility companies' fact2='Drummer' fact3='Private pilot in-training' fact4='Grew up in Orange County, CA' />
                <TeamCard name='Gaje Robarge' title='Web Developer' image={gaje_image} fact1='3 years of experience' fact2='Has been to 15 Dead & Company shows' fact3='Loves to camp' fact4='Certified Jedi' />
                <TeamCard name='Jesse Packwood' title='Web Developer' image={jesse_img} fact1='Javascript Wizard' fact2='Motorcycle Enthusiast' fact3='Professional Photographer' fact4='Stay at home dog dad' />
                <TeamCard name='Ben Kimble' title='Backend Developer - AWS Guru' image={ben_img} fact1='Unreal Engine and Unity Game Developer' fact2='C++ Developer' fact3='Blockchain Enthusiast' fact4='Game Music Composer' />
            </TeamWrapper>
        )
    }

}

export default TeamContainer;