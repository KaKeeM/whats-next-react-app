import Img from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';
import {Container, Header, Title, LogoImg, MenuContainer, MenuItemLink} from './styles'
import React, { useEffect, useState } from 'react';

//FC é functional componente : => componente funcional
const Aside: React.FC  = () => {
    return (
        <Container>
            <Header>
                <Title>WhatsNext?</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard/>
                    Missões
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowDownward/>
                    Entrada
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowUpward/>
                    Saida
                </MenuItemLink>

                <MenuItemLink href="">
                    <MdExitToApp/>
                    Perfil
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside;

