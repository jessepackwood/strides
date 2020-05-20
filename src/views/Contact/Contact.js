import React, { Component } from 'react'
import { globalTheme } from '../../theme/theme'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer.js'
import ActionLink from '../../components/ActionLink/ActionLink'
import styled, { ThemeProvider } from 'styled-components'

const ContactWrapper = styled.div`
    background-color: ${props => props.theme.dark.bg};
    color: ${props => props.theme.dark.color};
    max-width: 650px;
    margin: 0 auto;
`

const StyledTitle = styled.h1`
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    color: #FFFFFF;
    margin: 0;
    padding: 0 50px;
`

const StyledForm = styled.form`
    padding: 25px 50px;
`

const StyledInput = styled.input`
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid grey;
    height: 55px;
    width: 100%;
    outline: none;
    :focus {
        border-bottom: 2px solid #66E0B9;
    }
`

const StyledTextArea = styled.textarea`
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid grey;
    height: 125px;
    width: 100%;
    outline: none;
    margin-bottom: 20px;

    :focus {
        border-bottom: 2px solid #66E0B9;
    }
`

export default class Contact extends Component {

    state = {

    }

    

    render() {

        return (
            <ThemeProvider theme={globalTheme}>
                <Header />
                <ContactWrapper>
                    
                    <StyledTitle>
                        Drop us a line...
                    </StyledTitle>
                    
                    <StyledForm>
                        <StyledInput placeholder='Your Name' />
                        <StyledInput placeholder='Email' />
                        <StyledInput placeholder='Phone' />
                        <StyledTextArea placeholder='Your message' />
                        <ActionLink text='Send message'>
                            Send message
                        </ActionLink>
                    </StyledForm>
                    
                </ContactWrapper>
                <Footer />
            </ThemeProvider>
        )
    }
}
