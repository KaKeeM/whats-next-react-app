import {Container, Header, Title, MenuContainer, MenuItemLink} from './styles'
import React from 'react';
import ListaDocumentos from '../ListaChats';

//FC é functional componente : => componente funcional
const Aside: React.FC  = () => {
    return (
        <Container>
            <Header>
                <Title>WhatsNext?</Title>
            </Header>

            <MenuContainer>
                <ListaDocumentos/>
            </MenuContainer>
        </Container>
    )
}

export default Aside;

