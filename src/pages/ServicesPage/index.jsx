import { Headline } from "../../components/Headline";
import { CardService } from "../../components/CardServices";
import Flower from "../../assets/Image_Flower.png"
import Volume from "../../assets/volume.png"
import SpeachBubble from "../../assets/SpeachBubble.png"
import Graph from "../../assets/Graph.svg"
import { styled } from "styled-components";

const ServiceContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(237, 229, 240, 0.50) 100%);
    margin-bottom: 56px;
    @media screen and (min-width: 868px) {
        padding-top: 152px;
    }
    `

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    margin-top: 56px;
    @media screen and (min-width: 868px) {
        flex-direction: row;
        gap: 0px;
        margin-top: 136px;
        flex-wrap: wrap;
        margin-bottom: 268px;
    }
`

export function Service() {
    return (
        <ServiceContainer>
            <Headline line="02. What We Do"
                secondTitle="We Make Designs that Lead and Inpire."
                showArrow={true}
            />
            <CardContainer>
                <CardService titleService="Strategy" image={Graph} backgroundcolors="#D1ECFD" />
                <CardService titleService="Branding" image={Flower} backgroundcolors="#908CFF" />
                <CardService titleService="Interactive" image={Volume} backgroundcolors="#FFC0A5" />
                <CardService titleService="Communicate" image={SpeachBubble} backgroundcolors="#FFADD0" />
            </CardContainer>
        </ServiceContainer>
    )
}