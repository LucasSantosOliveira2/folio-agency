import { CardJobs } from "../../components/CardJobs";
import { Headline } from "../../components/Headline";
import Notification from "../../assets/notification.png"
import { styled } from "styled-components";
import Logo from "../../assets/logo.png"

const JobsContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 48px;

    background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(237, 229, 240, 0.50) 100%);
    gap: 16px;
    @media screen and (min-width: 868px) {
        flex-direction: row;
        padding: 0px 135px;
        align-items: flex-start;
    }

    `

const Image = styled.img`
border-radius: 8px;
background-color:${(props) => props.theme.colors.background.blue}; ;
max-width: 100%;
`
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 48px;
`

export function Jobs() {
    return (
        <JobsContainer>
            <Image src={Logo} />
            <Headline line="04. We are hiring"
                secondTitle="Jobs"
                text="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
            />
            <CardContainer>
                <CardJobs title="Graphic Designer" image={Notification} />
                <CardJobs title="Visual Designer" />
                <CardJobs title="Art Director" />
                <CardJobs title="Web Designer" image={Notification} />
            </CardContainer>
        </JobsContainer>
    )
}