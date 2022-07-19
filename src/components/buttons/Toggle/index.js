import React from "react";
import styled from "@emotion/styled";

export const Toggle = ({ ...props }) => {
  return (
    <ToggleButton {...props}>
      <ToggleKnob />
    </ToggleButton>
  );
};

export const ToggleButton = styled.button`
  position: relative;
  background: var(--main-accent-color);
  height: 18px;
  width: 32px;
  border-radius: 50px;
  border: solid var(--main-accent-color) 1px;
  margin: auto;
`;
export const ToggleKnob = styled.span`
  height: 14px;
  width: 14px;
  bottom: 1px;
  right: 1px;
  z-index: 2;
  background: var(--main-bg-color);
  position: absolute;
  border-radius: 50px;
`;
