import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    background: #212529;
    padding-top: 1em;
    color: white;
    min-height: 86vh;

    p{
        margin-top: 1em;
        color: #16479d;
        font-weight: bold;
    }
    
    h1{
        margin-bottom: 1.5em;
    }
  `}
`;