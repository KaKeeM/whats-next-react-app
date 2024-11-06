import {Container, Header, Title, MenuContainer} from './styles'
import React from 'react';
import ListaMissoes from '../ListaMissoes';

//FC é functional componente : => componente funcional
const Aside: React.FC  = () => {
    return (
        <Container>
            <Header>
                <Title>WhatsNext?</Title>
            </Header>

            <MenuContainer>
                <ListaMissoes/>
            </MenuContainer>
        </Container>
    )
}

export default Aside;

