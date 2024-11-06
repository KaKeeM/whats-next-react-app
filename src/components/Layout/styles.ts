import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 60px 300px auto ;
    grid-template-rows: 60px auto;
    grid-template-areas:
    'ASL ASR MH'
    'ASL ASR CT';
    
    box-sizing: border-box;
`;
