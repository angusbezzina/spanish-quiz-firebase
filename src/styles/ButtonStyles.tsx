import { Link } from "react-router-dom";
import styled from "styled-components";

const styles = `
  display: inline-block; 
  font-size: 1.8rem;
  padding: 1rem 0;
  width: 20rem;
  max-width: 20rem;
  text-align: center;
  border: 0.1rem solid var(--colorBlue);
  border-radius: var(--borderRadius);
  margin-bottom: 1rem;
  text-decoration: none;
  background-color: var(--colorWhite);

  &:hover {
    cursor: pointer;
    box-shadow: var(--boxShadow);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }

  &[disabled]:hover {
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export const LinkStyles = styled(Link)`
  ${styles}
`;

export const ButtonStyles = styled.button`
  ${styles}
`;

export const HomeLinkStyles = styled(LinkStyles)`
  position: absolute;
  top: 20px;
  right: 20px;
  max-width: 10rem;

  @media screen and (min-width: 768px) {
    max-width: 15rem;
  }
`;
