import { styled } from "styled-components"

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    color:${(props) => props.theme.colors.background.dark};
    @media screen and (min-width: 868px) {
        font-size: 4rem;
        line-height: 4.5rem;

    }
`

export const SecondTitle = styled(Title)`
  font-size: 2.5rem;
  line-height: 3rem;

  @media screen and (min-width: 868px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;
