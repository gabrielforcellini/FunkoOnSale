import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${() => css`
    heigth: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(33,37,41,0.73);
    color: white;
    border-top: 1px solid #666;
  `}
`;