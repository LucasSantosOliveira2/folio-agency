
import { styled } from "styled-components"
import Green from "../../assets/SpeachBubbleGreen.png"
import Logo from "../../assets/lightmode.png"
import Facebook from "../../assets/logo-facebook.png"
import Instagram from "../../assets/logo-instagram.png"
import Youtube from "../../assets/logo-youtube.png"

import { Text } from './../Text/'
import { useState } from 'react';



const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom:34px;
`

const ContactContainer = styled.div`
    width: 311px;
    height: 548px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background.blue};
    color: ${(props) => props.theme.colors.illustration.white};
    margin-bottom: 80px;
`

const TextOne = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
`

const TextTwo = styled.p`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5rem;
    margin: 40px 0px 40px 0px;
`

const ButtonFooter = styled.button`
    width: 263px;
    height: 56px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.background.blue};
    background-color: ${(props) => props.theme.colors.illustration.white};
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    border: none;
`

const TextTree = styled.p`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    margin: 40px 0px 40px 0px;
`

const FlexBoxOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 236px;
    text-align: center;
`
const FlexBoxTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    text-align: center;
    margin-bottom: 32px;

`
const Line = styled.div`
    width: 312px;
    height: 2px;
    border-top: 2px solid ${(props) => props.theme.colors.illustration.white};
    opacity: 0.2;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 311px;
    height: 315px;
    gap: 32px;
`
const DropDown = styled.select`
    width: 311px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid var(--stroke-1, #D8D8D8);
    outline: none;
`
const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    p{
        color: var(--text-deactive-2, #ADADAD);

    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    }
`
const Links = styled.div`
    display: flex;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border: 1px solid #D8D8D8;
        border-radius: 50%;   
    }
    div:hover{
        background-color: ${(props) => props.theme.colors.background.blue};  
    }
`

export function Footer() {
    const [selectedMenu, setSelectedMenu] = useState('option1');

    const handleSelectChange = (event) => {
        setSelectedMenu(event.target.value);
    };

    return (
        <Wrapper>
            <ContactContainer>
                <FlexBoxOne>
                    <img src={Green} alt="" />
                    <TextOne>👋Say hello</TextOne>
                    <TextTwo>A design team building a curated marketplace for UI designers.</TextTwo>
                </FlexBoxOne>
                <Line></Line>
                <FlexBoxTwo>
                    <TextTree>Let’s talk about your next project</TextTree>
                    <ButtonFooter>Contact Us</ButtonFooter>
                </FlexBoxTwo>
            </ContactContainer>
            <FooterContainer>
                <img src={Logo} alt="Logo" />
                <Text textAlign="center" textColor="#ADADAD">Agency is a full-service agency, busy designing and building.</Text>
                <DropDown value={selectedMenu} onChange={handleSelectChange}>
                    <option value="option1">Home</option>
                    <option value="option2">About</option>
                    <option value="option3">Services</option>
                    <option value="option4">Jobs</option>
                </DropDown>
                <FooterBottom>
                    <Links>
                        <div>
                            <img src={Facebook} alt="Facebook" />
                        </div>
                        <div>
                            <img src={Instagram} alt="Instagram" />
                        </div>
                        <div>
                            <img src={Youtube} alt="Youtube" />
                        </div>
                    </Links>
                    <p> © 2020, UI8 LLC.</p>
                </FooterBottom>
            </FooterContainer>
        </Wrapper>
    )
}