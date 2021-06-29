import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-router-dom';

let BgFooter = "#000"

function footer() {
    return (
        <Footer>
                <Link to="/privacidade"><TextFooter>Política de Privacidade</TextFooter></Link>
                <TextFooter>Email: bob's@contato.com</TextFooter>

            <ContainerIcons>
                <LinkIcons href="https://www.instagram.com/bobsbrasil/?hl=pt-br" target="_blanck"> <InstagramIcon></InstagramIcon></LinkIcons>
                <LinkIcons href="https://www.facebook.com/bobsbrasil/" target="_blanck"><FacebookIcon></FacebookIcon></LinkIcons>
                <LinkIcons href="https://twitter.com/bobsbrasil?lang=pt" target="_blanck"><TwitterIcon></TwitterIcon></LinkIcons>
            </ContainerIcons>
        </Footer>
    )
}

export default footer;

const Footer = styled.footer`
    margin-top:40px;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    background-color: ${BgFooter};
    padding-top:4px;
   
`
const TextFooter = styled.p`
    color: #5ce1e6;
    font-size: 18pt;
    font-weight: bold;

    &:hover{
        color: #FFF;
    }
    
`

const ContainerIcons = styled.div`

    font-size: 18pt;
    font-weight: bold;
    
`   

const LinkIcons = styled.a`
    text-decoration: none;
    color: #5ce1e6;

    &:hover{
        color: #FFF;
    }
`