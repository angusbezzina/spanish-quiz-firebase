import styled from "styled-components";

export const LoaderStyles = styled.div`
  border: 1.6rem solid var(--colorWhite);
  border-radius: 50%;
  border-top: 1.6rem solid var(--colorBlue);
  width: 12rem;
  max-width: 12rem;
  height: 12rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
