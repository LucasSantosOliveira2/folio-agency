import { styled } from 'styled-components';
import { Headline } from './../../components/Headline';
import { useState } from 'react';
import Desktop from "../../assets/desktop.png";
import { Text } from './../../components/Text/index';
import { StyledButton } from './../../components/Button/index';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background.dark};
`
const Container = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 80px;
    padding-right: 32px;
`
const Year = styled.select`
    width: 144px;
    height: 48px;
    border-radius: 8px;
    background: var(--color-dark, #232340);
    outline: none;
    border: none;
    color: white;
`

const Options = styled.option`
    width: 124px;
    height: 48px;
    border-radius: 8px;
    background: var(--color-dark, #232340);
`
const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 360px;
  background-image: url(${Desktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const AboutText = styled.h6`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.illustration.white};
    width: 311px;
    `
const TextContainer = styled.div`
    margin: 56px 0px 56px 0px; 
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px 32px 0px 32px;
    gap: 40px;
`

const NumberContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 310px;
    height: 310px;
    border-radius: 310px;
    color:white;
    box-shadow: 0px 23px 51px 0px rgba(0, 0, 0, 0.24);
    h1{
        font-size: 8.75rem;
        font-weight: 600;
    }

    h6{
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.5rem;
    }
    `

export function About() {

    const [selectedYear, setSelectedYear] = useState(2017);

    const handleSelectChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <Wrapper>
            <Container>
                <Headline line="01. Who We Are"
                    secondTitle="We Make Designs that Lead and Inpire."
                    showArrow={true}
                    color="white"
                />
                <Year value={selectedYear} onChange={handleSelectChange}>
                    <Options value="2017">2017</Options>
                    <Options value="2018">2018</Options>
                    <Options value="2019">2019</Options>
                    <Options value="2020">2020</Options>
                    <Options value="2021">2021</Options>
                </Year>
            </Container>
            <Image />
            <TextContainer>
                <AboutText>A design team building a curated marketplace for UI designers.</AboutText>
                <Text>4,404 curated design resources to energize your creative workflow. We re a growing family of 334,531 designers and makers from around the world</Text>
                <StyledButton $useBlueBackground>Contact Us</StyledButton>
                <NumberContainer>
                    <h1>28</h1>
                    <h6>Bigest Branding</h6>
                </NumberContainer>
            </TextContainer>

        </Wrapper>
    )
}