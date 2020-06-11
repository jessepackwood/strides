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
    @media (max-width: 500px) {
        padding-bottom: 100px;
    }
`

const StyledTitle = styled.h1`
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    color: #FFFFFF;
    margin: 0;
    padding: 0 50px;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`

const StyledResponse = styled(StyledTitle)`
    margin-top: 50px;
    font-size: 28px;
`

const StyledForm = styled.form`
    padding: 25px 50px;
    @media (max-width: 500px) {
        padding: 25px;
    }
`

const StyledInput = styled.input`
    color: #fff;
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
    color: #fff;
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
const StyledSubmitBtn = styled.input`
    background: transparent;
    /* width: 116px; */
    /* height: 25px; */
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    color: #66E0B9;
    text-decoration: none;
    border: none;
    :hover {
        cursor: pointer;
    }
    @media (max-width: 500px) {
        padding: 0;
        margin: 0;
    }
`
const GreenLine = styled.div`
    margin: 10px 0 0 7px;
    width: 50px;
    border-bottom: 4px solid #66E0B9;
    @media (max-width: 500px) {
        padding: 0;
        margin: 10px 0;
    }
`

export default class Contact extends Component {

        state = { 
            message: '',
            name: '',
            email: '',
            phone: '',
            sentEmail: false
        }

        handleName = (event) => {
            this.setState({ name: event.target.value })
        }

        handleEmail = (event) => {
            this.setState({ email: event.target.value })
        }

        handlePhone = (event) => {
            this.setState({ phone: event.target.value })
        }

        handleMessage = (event) => {
            this.setState({message: event.target.value})
        }

        clearInputs = () => {
            this.setState({ sentEmail: true })
        }

        handleSubmit = (event) => {
            event.preventDefault()
            const templateId = 'basic_contact';
        
            this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, from_phone: this.state.phone, reply_to: this.state.email})
            this.clearInputs()
          }
        
          sendFeedback = (templateId, template_params) => {
            window.emailjs.send(
              'gmail', templateId,
              template_params
              ).then(res => {
                console.log('Email successfully sent!')
              })
              // Handle errors here however you like, or use a React error boundary
              .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
          }

    render() {

        return (
            <ThemeProvider theme={globalTheme}>
                <Header />
                <ContactWrapper>
                {!this.state.sentEmail &&
                <div>
                    <StyledTitle>
                        Drop us a line...
                    </StyledTitle>
                    <StyledForm>
                        <StyledInput placeholder='Your Name' onChange={this.handleName} />
                        <StyledInput placeholder='Email' onChange={this.handleEmail} />
                        <StyledInput placeholder='Phone' onChange={this.handlePhone} />
                        <StyledTextArea 
                            id="test-mailing"
                            name="test-mailing"
                            onChange={this.handleMessage}
                            required
                            value={this.state.feedback}
                            placeholder='Your message' 
                        />
                        <StyledSubmitBtn type='button' value='Send Message' onClick={this.handleSubmit} />
                        <GreenLine />
                    </StyledForm>
                </div>
                }
                {this.state.sentEmail &&
                    <StyledResponse>
                        Thanks for reaching out! We look forward to working with you and we'll get back to you as soon as we can.
                    </StyledResponse>
                }
                    
                </ContactWrapper>
                <Footer />
            </ThemeProvider>
        )
    }
}
