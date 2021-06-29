import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

let BgColor = '#000';
let ColorMenu = '#fff';
let ColorIcon = '#fff';
let ColorIconHover = '#5ce1e6';
let ColorIconActive = '#5ce1e6';

function header() {
    return (
        <Header>

            <Link to="/"><ContainerLogo><Logo>Bob's</Logo></ContainerLogo></Link>
            <MenuIcon> </MenuIcon>
            <NavBar>
                <NavItem><NavLink href="">Bob's Fã</NavLink></NavItem>
                <NavItem><NavLink href="">Baixe o app</NavLink></NavItem>
                <NavItem><Link to="/cardapio"><NavLink>Cardápio</NavLink></Link></NavItem>
                <NavItem><NavLink href="">Delivery</NavLink></NavItem>
                <NavItem><NavLink href="">Onde tem Bob's</NavLink></NavItem>
                <NavItem><NavLink href="">Seja um franqueado</NavLink></NavItem>
            </NavBar>
            <Link to="/show-cart"><ContainerIcon><ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon></ContainerIcon></Link>
        </Header>
    )
}

export default header;

const Header = styled.header`   
    display: flex;
    background-color: ${BgColor};

`
const ContainerMenu = styled.div`
    color:#5ce1e6;
    font-size: 22pt;
    position: relative;
    top: 10px;
    padding-right: 10px;
    cursor: pointer;
`
const ContainerLogo = styled.span`
    color:#5ce1e6;
    font-size: 20pt;
    position: relative;
    top: 10px;
    padding-right: 10px;
`

const Logo = styled.span`
   cursor: pointer;
   margin-left: 25px;
   
`
const NavBar = styled.nav`
    display: flex;
    margin-top: 15px;
    position: relative;
    left: 200px;
`
const NavItem = styled.li`
    padding-left: 20px;
 
    @media (max-width:1024px){
        padding-left: 10px;
    }

    @media (max-width:980px){
        padding-left: 5px;
    }


`
const NavLink = styled.a`
    color:${ColorMenu};
    font-size: 14pt;
    &:hover{
        text-decoration: underline ${ColorIconHover};
        transition: ease-in .3s;
    }

    @media (max-width:980px){
        font-size:18px;
    }
    

`
const ContainerIcon = styled.div`
    margin-top: 20px;
    color:${ColorIconActive};
    cursor: pointer;

    position: relative;
    left: 450px;
    top:-9px;
`

