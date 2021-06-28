import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from './config/particle-config';
import styled from 'styled-components';

export default function ParticleBackground(){
    return(
        <ContainerParticles>
            <h2>Olá, seja muito bem-vindo!</h2>
            <Particles params={ParticleConfig} height={500}></Particles>
        </ContainerParticles>
    );
}

const ContainerParticles = styled.div`
    height: 500px;
`