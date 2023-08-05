import { styled } from 'styled-components';
import { Headline } from './../../components/Headline';
import { CardWork } from './../../components/CardWork';
import { Text } from './../../components/Text';
import FemaleRunning from "../../assets/FemaleRunning.png"
import Stroke from "../../assets/Stroke-Black.png"
import Main from "../../assets/Main.png"
import Tablet from "../../assets/Tablet.png"
import TabletSecond from "../../assets/TabletTwo.png"
import MaleWalking from "../../assets/MaleWalking.png"


const WorkContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const CardContainer = styled.div`
    padding: 0px 32px 0px 32px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 238px;
    gap: 10px;
    `
const WorkTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: var(--color-dark, #232340);
    `

const Button = styled.button`
    width: 313px;
    height: 46px;
    background-color: ${(props) => props.theme.colors.background.blue};
    color: var(--color-white, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 48px;
`
export function Work() {
    return (
        <WorkContainer>
            <Headline line="03. Famous Projects"
                secondTitle="Our Partnerships."
                text="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
            />
            <CardContainer>
                <CardWork backgroundcolor="#FFBA79" image={FemaleRunning} showButton={true} />
                <TitleContainer>
                    <WorkTitle>Bento 3D Illustration</WorkTitle>
                    <Text>Agency is a full-service agency, busy designing and building beautiful digital products, brands</Text>
                    <img src={Stroke} alt="" />
                </TitleContainer>

                <CardWork backgroundcolor="#E8BEFF" image={Main} />
                <TitleContainer>
                    <WorkTitle>Bento 3D Illustration</WorkTitle>
                    <Text>Agency is a full-service agency, busy designing and building beautiful digital products, brands</Text>
                    <img src={Stroke} alt="" />
                </TitleContainer>

                <CardWork backgroundcolor="#FFCE79" image={TabletSecond} />
                <TitleContainer>
                    <WorkTitle>Bento 3D Illustration</WorkTitle>
                    <Text>Agency is a full-service agency, busy designing and building beautiful digital products, brands</Text>
                    <img src={Stroke} alt="" />
                </TitleContainer>

                <CardWork backgroundcolor="#D1ECFD" image={Tablet} />
                <TitleContainer>
                    <WorkTitle>Bento 3D Illustration</WorkTitle>
                    <Text>Agency is a full-service agency, busy designing and building beautiful digital products, brands</Text>
                    <img src={Stroke} alt="" />
                </TitleContainer>

                <CardWork backgroundcolor="#FFBA79" image={MaleWalking} />
                <TitleContainer>
                    <WorkTitle>Bento 3D Illustration</WorkTitle>
                    <Text>Agency is a full-service agency, busy designing and building beautiful digital products, brands</Text>
                    <img src={Stroke} alt="" />
                </TitleContainer>
                <Button>Contact Us</Button>
            </CardContainer>
        </WorkContainer>
    )
}