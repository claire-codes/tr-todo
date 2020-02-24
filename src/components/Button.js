import React from "react";

import { StyledButton } from "./../component-styles.js";

function Button(props) {
  let buttonType = props.buttonType || "button";
  let buttonText = props.buttonText || "Button";

  return (
    <StyledButton type={buttonType} onClick={props.clickEvent}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;
