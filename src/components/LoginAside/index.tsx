import {Container, Header, Title, } from './styles'
import React from 'react';

//FC é functional componente : => componente funcional
const LoginAside: React.FC  = () => {
    return (
        <Container>
            <div className="image">
            <Header className="header">
                {/* <LogoImg src={Img} alt = "Logo Minha Carteira"/> */}
                <Title>WhatsNext?</Title>
            </Header>
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