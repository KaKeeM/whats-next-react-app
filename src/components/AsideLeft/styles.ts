import styled from 'styled-components'

export const Container = styled.div`
    grid-area: ASL;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 2px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
   
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin: 10px;
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
`;


//a indica que é um link
export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0px;
    display: flex;
    align-items: center;
    gap: 5px;

    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
    > svg {
        font-size:18px;
    }
`;