import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-height: 86vh;
    padding: 1em 2em 3em;
    max-width: 1200px;
    margin: 0 auto;
  `}
`;
