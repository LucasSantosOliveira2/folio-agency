import { styled } from "styled-components";

export const Text = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  text-align: ${props => props.textAlign || 'justify'};
  color: ${props => props.textColor || 'var(--text-body-light-mode, #606060)'};

  @media screen and (min-width: 868px) {
    font-size: 1.125rem;
    line-height: 2rem;
  }
`;
