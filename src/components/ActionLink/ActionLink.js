import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    width: 116px;
    height: 25px;
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    color: #66E0B9;
    text-decoration: none;
`
const StyledBorder = styled.div`
    border-bottom: 4px solid #66E0B9;
    margin-top: 10px;
    width: 50px;
`

const ActionLink = ({text, url}) => (
    <div>
        <StyledLink to={url}>
            {text}
        </StyledLink>
        <StyledBorder />
    </div>
)

export default ActionLink