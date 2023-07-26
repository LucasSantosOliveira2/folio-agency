import { styled } from "styled-components";
import { Title } from "../Title";
import PropTypes from "prop-types";
import { Text } from "../Text";
import { StyledButton } from "../Button";

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
    margin-top: ${(props) => props.margin || "0px"};
    padding: 0px ;
    gap: 48px;
  }
`;

export function Headline({ title, text, btnName, margin }) {
  return (
    <HeadlineContainer margin={margin}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {btnName ? <StyledButton $useBlueBackground>{btnName}</StyledButton> : null}
    </HeadlineContainer>
  );
}

Headline.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  btnName: PropTypes.string,
  margin: PropTypes.string,
};
