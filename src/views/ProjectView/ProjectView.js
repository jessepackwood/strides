import React, { Component } from 'react'
import styled from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectPage from '../../components/ProjectPage/ProjectPage'

const ViewWrapper = styled.div`
    max-width: 760px;
    margin: 75px auto 0;
    padding: 0 25px 175px;
`

export default class ProjectView extends Component {
    render() {
        return (
            <div>
                <Header />
                <ViewWrapper>
                    <ProjectPage project={this.props.project}/>
                    <ActionLink text='Contact us' url='/contact' />
                </ViewWrapper>
                <Footer />
            </div>
        )
    }
}
