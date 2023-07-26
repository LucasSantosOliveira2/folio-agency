import { styled } from "styled-components"
import { Headline } from "../../components/Headline"
import Computer from "../../assets/computer2.png"

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 0px 135px;

    }
`

const Image = styled.img`
    width: 100%;
    max-width: 375px;
    object-fit: cover;
    @media screen and (min-width: 768px) {
        max-width: 733px;
    }
`;


export function Hero() {
    return (
        <HeroContainer>
            <Headline text='Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.'
                title="Stand Out from The Crowd."
                btnName="Recent Works" />
            <Image src={Computer} alt="Logo" />
        </HeroContainer>
    )
}