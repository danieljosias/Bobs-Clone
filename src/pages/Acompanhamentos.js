import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';


let ColorShadow = "#cecece"
let ColorText = "#a0a0a0"
let HoverText = "#5ce1e6"
let ColorTitle = "#a0a0a0;"

function acompanhamentos() {
    return (
        <ContainerCard>
            <ContainerTitle>
                <CardTitle>Acompanhamentos</CardTitle>
                <Link to="/cardapio"><BackButton>Voltar</BackButton></Link>
            </ContainerTitle>
            
            <Card>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/batata-palito.o.p.png"></CardImage>
                    <CardText>Batata Palito</CardText>
                </CardInner>
            </Card>    
            <Card>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/batata-canoa.o.m.png"></CardImage>
                   <CardText>Batata Canoa</CardText>
                </CardInner>
            </Card>
            <Card>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/batata-canoa-cheddar-bacon.o.m.png"></CardImage>
                    <CardText>Batata Canoa Chaeddar e Bacon</CardText>
                </CardInner>
            </Card>
            <Card1>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/batata-canoa-com-franlitos.o.batata-canoa-e-franlitos.png"></CardImage>
                    <CardText>Batata Canoa com Franlitos</CardText>
                </CardInner>
            </Card1>
            <Card1>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/franlitos.o.4-un.png"></CardImage>
                    <CardText>Franlitos</CardText>
                </CardInner>
            </Card1>
            <Card1>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/refrigerantes.o.fanta-guarana.png"></CardImage>
                    <CardText>Refrigerantes</CardText>
                </CardInner>
            </Card1>
      
        </ContainerCard>
        
    )
}

export default acompanhamentos

const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    cursor: pointer;
    height: 550px;

`
const ContainerTitle = styled.div`
    position: relative;
    left: 140px;
    
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

const CardTitle = styled.h1`
    color: ${ColorTitle};
`
const Card = styled.div`
    margin-top:90px;

    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px ${ColorShadow};
   
    width: 300px;
    height: 200px;

    margin-right: 15px;

    position: relative;
    left: -110px;

`
const Card1 = styled.div`
    
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px ${ColorShadow};
   
    width: 300px;
    height: 200px;

    margin-left: 15px;
    
    align-items: center;
    
    position: relative;
    left: 174px;


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