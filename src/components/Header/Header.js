import PropTypes from "prop-types"
import React from "react"
import Logo from '../../assets/Teal.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuBtn from '../../assets/menu-btn.png'
import MenuDrawer from '../../components/MenuDrawer/MenuDrawer'

const StyledHeader = styled.div`
    padding: 0 50px;
    /* background: #08090F; */
    height: 72px;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledLogo = styled.img`
  height: 40px;
  width: 48px;
`

const StyledBtn = styled.div`
    background-image: url(${MenuBtn});
    background-repeat: no-repeat;
    height: 22px;
    width: 56px;
    background-size: contain;
    background-position: center;
`

class Header extends React.Component {

    state={
        menuOpened: false,
    }

    toggleMenu = () => {
        !this.setState.menuOpened ? this.setState({ menuOpened: true})
    }

    render () {
        return (
            <StyledHeader>
                    <Link to='/'>
                        <StyledLogo src={Logo} alt='strides logo' />
                    </Link>
                    <StyledBtn />
            </StyledHeader>
        )        
    }
}

export default Header