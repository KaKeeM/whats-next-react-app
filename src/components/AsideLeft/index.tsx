import Img from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink } from './styles';
import React from 'react';
import { useAuth } from '../../hooks/auth'; // Importando o hook useAuth

const Aside: React.FC = () => {
    const { signOut } = useAuth(); // Usando o hook useAuth para obter a função signOut

    return (
        <Container>
            <Header>
                <LogoImg src={Img} alt="Logo Minha Carteira" />
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard />
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowDownward />
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowUpward />
                </MenuItemLink>

                <MenuItemLink as="button" onClick={signOut}>
                    <MdExitToApp />
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;
