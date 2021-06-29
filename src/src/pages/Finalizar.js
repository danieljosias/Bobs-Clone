import React from 'react'
import styled from 'styled-components';

function finalizar() {
    return (
        <ContainerFinalizar>
            <FinalizarText>
                Olá, querido(a) cliente.
                Obrigado pela preferência, em breve entregaremos o seu lanche.
                <br/>
                <br/>Atenciosamente, Bob's.
            </FinalizarText>
        </ContainerFinalizar>
    )
}

export default finalizar;

const ContainerFinalizar = styled.div`
    width: 50%;
    margin:214px 350px;
`
const FinalizarText = styled.p`
    text-align:center;
    font-size: 18pt;
    font-weight: bold;
`