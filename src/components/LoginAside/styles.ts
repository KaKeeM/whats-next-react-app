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
    #f5eca6 0,
    #ffd32f 50%,
    #e3ca0e 100%
  );
  border-right: 2px solid ${props => props.theme.colors.gray};
  height: 100vh;  // Altura igual à altura da janela de visualização

  .image {
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    animation: ${moveToRight} 0.5s;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
  }
  .header{
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    margin: 0.5rem;
  }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
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