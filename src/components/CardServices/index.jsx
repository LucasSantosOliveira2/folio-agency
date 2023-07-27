import { styled } from "styled-components"
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 311px;
    height: 190px;
    border-radius: 32px;
    background-color: ${(props) => props.theme.colors.illustration.white};
    gap: 30px;
    color: ${(props) => props.theme.colors.background.blue};
    transition: background-color 0.3s ease, color 0.3s ease;
    border: solid 1px;

    &:hover {
    background-color: ${(props) => props.theme.colors.background.blue};
    color: ${(props) => props.theme.colors.illustration.white};
    }
    @media screen and (min-width: 868px) {
        width: 293px;
        height: 480px;
        border-radius: 48px;
        flex-direction: column;
        &:hover {
            transform: scale(1.2);
        }
     }
`;

const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${(props) => props.backgroundcolors};
    border-radius: 50%;
`;

const ItemImage = styled.img`   
max-width: 100%;
`

const TitleService = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

export function CardService({ titleService, image, backgroundcolors }) {
    return (
        <Wrapper>
            <ImageContainer backgroundcolors={backgroundcolors}> <ItemImage src={image} /> </ImageContainer>
            <TitleService>{titleService}</TitleService>
        </Wrapper>
    )
}

CardService.propTypes = {
    titleService: PropTypes.string,
    backgroundcolors: PropTypes.string,
    image: PropTypes.string.isRequired,
};
