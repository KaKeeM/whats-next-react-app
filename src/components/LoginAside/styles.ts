import styled, { keyframes } from "styled-components";

const moveToRight = keyframes`
0% {
  opacity: 0;
  transform: translate(-200px);

}
50%{
  opacity: 3;
}
100%{

  transform: translate(0px);
  opacity: 1;
}


`;

export const Container = styled.div`
    grid-area: AS;
    background-image: radial-gradient(
      circle at 50% 50%,
      #ffde45 0,
      #ffd32f 50%,
      ${props => props.theme.colors.maincolor} 100%
    );
    border-right: 2px solid ${props => props.theme.colors.gray};
    
    .image {
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    animation: ${moveToRight} 0.5s;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
  }
    `;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin: 1rem;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
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