import styled from "styled-components";

interface QuestionStylesProps {
  correct: string;
}

export const QuestionStyles = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1.8rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadowAlt);
  ${({ correct }: QuestionStylesProps) => {
    return correct
      ? `background-color: ${
          correct === "correct" ? `var(--colorGreen)` : `var(--colorRed)`
        };`
      : `background-color: white;`;
  }}

  &:hover {
    cursor: pointer;
    box-shadow: var(--boxShadow);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }

  .choice-prefix {
    padding: 1.5rem 2.5rem;
    min-width: 60px;
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
    color: var(--colorWhite);
    ${({ correct }: QuestionStylesProps) => {
      return correct
        ? `background-color: ${
            correct === "correct" ? `var(--colorGreen)` : `var(--colorRed)`
          };`
        : `background-color: var(--colorBlue);`;
    }}
  }

  .choice-text {
    padding: 1.5rem;
    width: 100%;
  }
`;
