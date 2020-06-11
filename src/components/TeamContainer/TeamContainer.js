import React from 'react';
import TeamCard from '../TeamCard/TeamCard'
import styled from 'styled-components'
import austin_img from '../../assets/team/austin_img.jpg'
import jesse_img from '../../assets/team/jesse_img.JPG'
import brian_img from '../../assets/team/brian_img.png'


const team = [
    {name: 'Austin Betzer', title: 'iOS Developer'},
    {name: 'Jesse Packwood', title: 'Web Developer'},
    {name: 'Andrew Carver', title: 'Android Developer'},
    {name: 'Brian Clay', title: 'Designer'}
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

        return  (
            <TeamWrapper>
                <TeamCard name='Austin Betzer' title='iOS Developer' image={austin_img} />
                <TeamCard name='Jesse Packwood' title='Web Developer' image={jesse_img} />
                <TeamCard name='Brian Clay' title='Designer' image={brian_img} />
            </TeamWrapper>
        )
    }

}

export default TeamContainer;