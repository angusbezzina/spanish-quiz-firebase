import styled from "styled-components";

export const AppStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;

  & > * {
    width: 100%;
  }

  .score-title {
    margin-bottom: 2rem;
  }
`;
