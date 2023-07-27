import { styled } from "styled-components"
import Left from "../../assets/arrow-down-left.png"
import Right from "../../assets/arrow-down-right.png"


const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

const ArrowLeft = styled.img`
max-width: 100%;

&:hover {
    filter: brightness(1000%);
    }
`

const ArrowRight = styled.img`
max-width: 100%;

&:hover {
    filter: brightness(1000%);
    }
`
const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    @media screen and (min-width: 868px) {
        width: 64px;
        height: 64px;
    }
    
    &:hover {
        background-color: ${(props) => props.theme.colors.background.blue} ;
        cursor: pointer;
        border-radius: 50%;
    }
`

export function Arrow() {
    return (
        <Wrapper>
            <ArrowContainer>
                <ArrowLeft src={Left} />
            </ArrowContainer>
            <ArrowContainer>
                <ArrowRight src={Right} />
            </ArrowContainer>
        </Wrapper>
    )
}