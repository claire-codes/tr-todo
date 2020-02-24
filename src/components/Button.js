import React from "react";

import { StyledButton } from "./../component-styles.js";

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
