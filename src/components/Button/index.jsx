import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledButton = styled.button`
  width: 180px;
  height: 64px;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.theme.colors.illustration.white};
  background-color: ${(props) =>
    props.$useBlueBackground
      ? props.theme.colors.background.blue
      : props.theme.colors.background.dark};
`;

StyledButton.propTypes = {
  $useBlueBackground: PropTypes.bool,
};


/*export function Button({ name }) {
    return <StyledButton>{name}</StyledButton>;
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};*/

