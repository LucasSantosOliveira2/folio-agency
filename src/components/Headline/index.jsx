import { styled } from "styled-components";
import { Title, SecondTitle } from "../Title";
import PropTypes from "prop-types";
import { Text } from "../Text";
import { StyledButton } from "../Button";
import { TagLine } from "../TagLine";
import { Arrow } from "../Arrow";

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  max-width: 600px;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  margin-top: ${(props) => props.margin || "128px"};
  padding: 0px 32px;

  @media screen and (min-width: 868px) {
    margin-top: 0px;
    padding: 0px ;
    gap: 48px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: 868px) {
    flex-direction: row;
    gap: 48px;
  }
`

export function Headline({ title, text, btnName, margin, line, secondTitle, showArrow, color }) {
  return (
    <HeadlineContainer margin={margin}>
      {line ? <TagLine>{line}</TagLine> : null}
      <TitleContainer>
        {secondTitle ? <SecondTitle colorScheme={color}>{secondTitle}</SecondTitle> : null}
        {showArrow && <Arrow />}
      </TitleContainer>
      {title ? <Title>{title}</Title> : null}
      {text ? <Text>{text}</Text> : null}
      {btnName ? <StyledButton $useBlueBackground>{btnName}</StyledButton> : null}
    </HeadlineContainer>
  );
}

Headline.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  secondTitle: PropTypes.string,
  line: PropTypes.string,
  btnName: PropTypes.string,
  margin: PropTypes.string,
  showArrow: PropTypes.bool,
  color: PropTypes.string,
};
