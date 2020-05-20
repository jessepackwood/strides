import React, { Component } from 'react';
import styled from 'styled-components'
import ActionLink from '../ActionLink/ActionLink'

const Wrapper = styled.div`
    /* display: flex; */
    /* padding: 0 50px; */
    /* height: 600px; */
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    padding-bottom: 40px;
    max-width: 760px;
    margin: 0 auto;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin: 20px 0;
`

const QuestionWrapper = styled.div`
    /* width: 324px; */
    height: 28px;
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    max-width: 480px;
`
const AnswerWrapper = styled.div`
    margin-top: 10px;
    height: 50px;
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #858585;
    width: 311px;
`

const Spacer = styled.div`
    height: 20px;
`

const FAQ = () => (
    <Wrapper>
        <div>
            <Container>
                <QuestionWrapper>
                    Is it expensive to make an app?
                </QuestionWrapper>
                <AnswerWrapper>
                    Usually
                </AnswerWrapper>
            </Container>
            <Container>
                <QuestionWrapper>
                    Like, how much are we talking?
                </QuestionWrapper>
                <AnswerWrapper>
                    Depends
                </AnswerWrapper>
            </Container>
            <Container>
                <QuestionWrapper>
                    Can you explain more?
                </QuestionWrapper>
                <AnswerWrapper>
                    No problem, just give us a call or shoot over an email.
                </AnswerWrapper>
            </Container>
        </div>
        <div>
            <Spacer />
            <ActionLink text='info@strides.com' />
            <Spacer />
            <ActionLink text='(208) 227-4479' />
        </div>
    </Wrapper>
)


export default FAQ;