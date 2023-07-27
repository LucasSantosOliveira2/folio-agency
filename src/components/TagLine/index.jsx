import { styled } from "styled-components"

export const TagLine = styled.h6`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    color:${(props) => props.theme.colors.background.blue};
    @media screen and (min-width: 868px) {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }
`
