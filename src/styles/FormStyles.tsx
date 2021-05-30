import styled from "styled-components";

export const FormStyles = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 1rem;
    width: 20rem;
    padding: 1.5rem;
    font-size: 1.8rem;
    border: none;
    box-shadow: var(--boxShadow);
  }

  input::placeholder {
    color: var(--colorPlaceholderText);
  }
`;
