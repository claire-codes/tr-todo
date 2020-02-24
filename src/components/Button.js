import React from "react";
import styled from "styled-components";

import media from "./../media.js";

const StyledButton = styled.button`
  margin-left: 0;
  font-size: 30px;
  background-color: unset;
  border-radius: 5px;
  font-family: "Learning Curve Pro";
  padding: 3px 15px;
  box-shadow: 1px 1px 2px #ccc;
  border-color: #ccc;

  @media (min-width: ${media.mobileBreakpoint}) {
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 3px #444242;
  }
`;

function Button({
  buttonText = "Click me",
  buttonType = "button",
  clickEvent = () => {
    return;
  }
}) {
  return (
    <StyledButton type={buttonType} onClick={clickEvent}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;
