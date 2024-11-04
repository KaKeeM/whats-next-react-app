import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 60px 250px auto ;
    grid-template-rows: 60px auto;
    grid-template-areas:
    'ASL ASR MH'
    'ASL ASR CT';

    border: 1.2rem solid black;  /* Borda preta */
    box-sizing: border-box;

`;
