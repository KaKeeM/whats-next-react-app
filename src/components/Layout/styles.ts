import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 400px auto;
    grid-template-rows: 60px auto;
    grid-template-areas:
    'AS MH'
    'AS CT';

    border: 1.2rem solid black;  /* Borda preta */
    box-sizing: border-box;

`;
