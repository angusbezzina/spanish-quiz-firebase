import styled from "styled-components";

export const HUDStyles = styled.div`
  display: flex;
  justify-content: space-between;

  .hud-prefix {
    text-align: center;
    font-size: 2rem;
  }

  .hud-main-text {
    text-align: center;
  }
`;

export const ProgressBarStyles = styled.div`
  width: 20rem;
  height: 4rem;
  border: 0.3rem solid var(--colorBlue);
  margin-top: 1.5rem;
  border-radius: var(--borderRadius);

  .progress-bar-full {
    height: 3.4rem;
    width: 0%;
    background-color: var(--colorBlue);
  }
`;
