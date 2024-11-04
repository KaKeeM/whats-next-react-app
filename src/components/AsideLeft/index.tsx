import Img from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';
import {Container, Header, LogoImg, MenuContainer, MenuItemLink} from './styles'
import React, { useEffect, useState } from 'react';

//FC é functional componente : => componente funcional
const Aside: React.FC  = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={Img} alt = "Logo Minha Carteira"/>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard/>
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowDownward/>
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowUpward/>

                </MenuItemLink>

                <MenuItemLink href="">
                    <MdExitToApp/>
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside;

