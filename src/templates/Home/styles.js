import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;
