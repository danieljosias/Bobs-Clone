import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';


let ColorShadow = "#cecece"
let ColorText = "#a0a0a0"
let HoverText = "#5ce1e6"
let ColorTitle = "#a0a0a0;"

function saladas() {
    return (
        <ContainerCard>
            <ContainerTitle>
                <CardTitle>Saladas</CardTitle>
                <Link to="/cardapio"><BackButton>Voltar</BackButton></Link>
            </ContainerTitle>
            
            <Card>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/salada-crispy.o.salada-crispy.png"></CardImage>
                    <Link to="/saladas"><CardText>Salada</CardText></Link>
                </CardInner>
            </Card>    
           
        </ContainerCard>
        
    )
}

export default saladas

const ContainerCard = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-top: 30px;
    cursor: pointer;
    height: 471px;

`
const ContainerTitle = styled.div`
    position: relative;
    left: 140px;
`

const CardTitle = styled.h1`
    color: ${ColorTitle};
`
const BackButton = styled.button`
   width: 100px;
  padding:2px;
  background-color: black;
  color: #FFF;
  border-radius: 15px;
  font-size: 14pt;
  cursor: pointer;
`
const Card = styled.div`
    margin-top: 90px;

    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px ${ColorShadow};
   
    width: 300px;
    height: 200px;

    margin-right: 15px;

`

const CardInner = styled.div`
   text-align: center;
   
`
const CardImage = styled.img`
    margin-top: 30px;

    width: 200px;
    height: 100px;
    
    
`
const CardText = styled.p`
    text-align: center;
    color: ${ColorText};
    font-size: 18pt;

    &:hover{
        text-decoration: underline ${HoverText};
        
    }
`