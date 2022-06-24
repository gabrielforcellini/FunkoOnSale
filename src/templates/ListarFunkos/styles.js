import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212529;
    flex-direction: column;

    .flutuante{
      animation: ${float} 5s ease-in-out infinite;
    }
    p#semPosts{
      color: greenyellow;
    }
  `}
`;

export const Title = styled.h1`
  ${() => css`
    color: greenyellow;
    font-size: 3rem;
    margin: 1rem;
  `}
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const Main = styled.main`
  ${() => css`
    display: flex;
    justify-content: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.2);
    max-width: 70rem;
    min-width: 31.5rem;
    border-radius: 8px;
    border: solid 1px;
    flex-wrap: wrap;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  `}
`;

export const Button = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-end;
  `}
`;

export const NotFound = styled.div`
  ${() => css`
    color: white;
  `}
`;
