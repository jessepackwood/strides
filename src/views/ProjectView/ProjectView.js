import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectPage from '../../components/ProjectPage/ProjectPage'

export default class ProjectView extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProjectPage />
                <Footer />
            </div>
            
        )
    }
}
