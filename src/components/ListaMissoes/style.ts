import styled from 'styled-components'

export const SubTitle = styled.div`
  color: ${props => props.theme.colors.white};
  margin: 10px 10px 10px 10px; /* margem horizontal de 10px e margem inferior de 10px */
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;

//a indica que é um link
export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    margin: 7px 10px;
    display: flex;
    align-items: center;

    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
    > svg {
        font-size:18px;
    }
`;