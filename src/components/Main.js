import React from 'react'
import styled from 'styled-components';

function main() {
    return (
        <Main>
            <TextMain>Olá, seja muito bem-vindo(a)!</TextMain>
        </Main>
    )
}

export default main

const Main = styled.main`
    height: 500px;
`
const TextMain = styled.p`
   font-size: 18pt;
`

