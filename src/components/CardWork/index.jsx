import { styled } from "styled-components"
import { PropTypes } from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 311px;
    height: 355px;
    background: ${(props) => props.backgroundcolor};
    border-radius: 17px;
    margin: 32px 0px 24px 0px;
`

const Image = styled.img`
    max-width: 100%;
`
const ButtonContainer = styled.div`
    padding-left: 20px;
    margin-top: 20px;
`

const Button = styled.button`
    width: 118px;
    height: 28px;
    border-radius: 14px;
    background: var(--shade-7, #908CFF);
    color: var(--color-white, #FFF);
    font-size: 0.625rem;
    font-weight: 600;
    line-height: 0.8125rem;
    border: none;
`

export function CardWork({ backgroundcolor, image, showButton }) {
    return (

        <Wrapper backgroundcolor={backgroundcolor}>
            <Image src={image} />
            <ButtonContainer>
                {showButton && <Button>Feature Product</Button>}
            </ButtonContainer>
        </Wrapper>
    )
} CardWork.propTypes = {
    backgroundcolor: PropTypes.string,
    image: PropTypes.string,
    showButton: PropTypes.bool,
};
