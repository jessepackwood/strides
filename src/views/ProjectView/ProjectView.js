import React, { useEffect } from 'react'
import styled from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectPage from '../../components/ProjectPage/ProjectPage'

const ViewWrapper = styled.div`
    max-width: 760px;
    margin: 75px auto 0;
    padding: 0 25px 175px;
    @media (max-width: 500px) {
        margin: 10px auto 0;
    }
`

const ProjectView = ({project}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Header />
                <ViewWrapper>
                    <ProjectPage project={project}/>
                    <ActionLink text='Contact us' url='/contact' />
                </ViewWrapper>
                <Footer />
        </div>
    );
};

export default ProjectView;
