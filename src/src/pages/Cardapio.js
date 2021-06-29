import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';


let ColorShadow = "#cecece"
let ColorText = "#a0a0a0"
let HoverText = "#5ce1e6"
let ColorTitle = "#a0a0a0;"

function cardapio() {
    return (
        <ContainerCard>
            <ContainerTitle>
                <CardTitle>Cardápio</CardTitle>
            </ContainerTitle>
            
            <Card>
                <CardInner>
                    <CardImage src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Figura-Hamburguer-PNG.png"></CardImage>
                    <Link to="/sanduiche"><CardText>Sanduíches</CardText></Link>
                </CardInner>
            </Card>    
            <Card>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/o-classico-do-bobs.o.p.png"></CardImage>
                    <Link to="/sobremesas"><CardText>Sobremesas</CardText></Link>
                </CardInner>
            </Card>
            <Card>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/batata-canoa.o.m.png"></CardImage>
                    <Link to="/acompanhamentos"><CardText>Acompanhamentos</CardText></Link>
                </CardInner>
            </Card>
            <Card1>
                <CardInner>
                    <CardImage src="https://cdn7.bobsfa.com.br/assets/cardapio/produtos/salada-crispy.o.salada-crispy.png"></CardImage>
                    <Link to="/saladas"><CardText>Saladas</CardText></Link>
                </CardInner>
            </Card1>
        </ContainerCard>
        
    )
}

export default cardapio

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
const Card = styled.div`
    margin-top: 50px;

    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px ${ColorShadow};
   
    width: 300px;
    height: 200px;

    margin-right: 15px;

`
const Card1 = styled.div`
    margin-top: 20px;

    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px ${ColorShadow};
   
    width: 300px;
    height: 200px;

    margin-left: 138px;


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