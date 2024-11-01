import Img from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';
import {Container, Header, Title, LogoImg, MenuContainer, MenuItemLink} from './styles'
import React, { useEffect, useState } from 'react';

//FC é functional componente : => componente funcional
const LoginAside: React.FC  = () => {
    return (
        <Container>
            <Header>
                {/* <LogoImg src={Img} alt = "Logo Minha Carteira"/> */}
                <Title>WhatsNext?</Title>
            </Header>
            <div className="image">
                    <img
                    src="sigin.png"
                    width={400}
                    height={400}
                    className="img-banner"
                    alt="banner"
                    />
                </div>
        </Container>
    )
}

export default LoginAside;