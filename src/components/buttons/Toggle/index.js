import React from "react";
import styled from "@emotion/styled";

export const Toggle = ({ toggled = false, ...props }) => {
  return (
    <ToggleButton {...props} className={!!toggled ? "toggle-on" : "toggle-off"}>
      <ToggleKnob className={!!toggled ? "toggle-on" : "toggle-off"} />
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  cursor: pointer;
  position: relative;
  height: 18px;
  width: 32px;
  border-radius: 50px;
  border: solid var(--main-accent-color) 1px;
  margin: auto;
  pointer: hand;
  &&.toggle-on {
    transition: background var(--main-render-time);
    background: var(--main-accent-color);
  }
  &&.toggle-off {
    transition: background var(--main-render-time);
    background: var(--muted-main-accent-color);
  }
`;
const ToggleKnob = styled.span`
  height: 14px;
  width: 14px;
  bottom: 1px;
  transform: translate(-1%, 0%);
  z-index: 2;
  background: var(--main-bg-color);
  position: absolute;
  border-radius: 50px;
  &&.toggle-on {
    animation: toggle-on var(--main-render-time) ease-in-out forwards;
  }
  &&.toggle-off {
    animation: toggle-off var(--main-render-time) ease-in-out forwards;

  @keyframes toggle-on {
    0% {
     transform: translate(-100%, 0%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
  @keyframes toggle-off {
    0% {
      
      transform: translate(0%, 0%);
    }
    100% {
  
      transform: translate(-100%, 0%);
    }
  }
`;
