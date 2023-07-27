import { styled } from "styled-components"
import { Text } from './../Text';
import Right from "../../assets/arrow-down-right.png"
import PropTypes from "prop-types";

const Wrapper = styled.div`
    width: 311px;
    height: 175px;
    border-radius: 24px;
    gap: 8px;
    background-color: ${(props) => props.theme.colors.illustration.white};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-left: 40px;
    flex-direction: column;
    color: ${(props) => props.theme.colors.background.dark};
    transition: background-color 0.3s ease, color 0.3s ease;
    border: solid 1px;

    &:hover {
    background-color: ${(props) => props.theme.colors.background.dark};
    color: ${(props) => props.theme.colors.illustration.white};
    }

    @media screen and (min-width: 868px) {
        width: 568px;
        height: 247px;
        border-radius: 40px;
    }
`

const Image = styled.img`   
    max-width: 100%;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px;
`

const TitleCard = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
`

export function CardJobs({ title, image }) {
    return (
        <Wrapper>
            <TitleContainer>
                <TitleCard>{title}</TitleCard>
                <Image src={image} />
            </TitleContainer>
            <Text>2 years experience</Text>
            <Image src={Right} />
        </Wrapper>
    );
}

CardJobs.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
};
