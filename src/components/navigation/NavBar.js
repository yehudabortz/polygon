import React, { useContext, useEffect } from "react";
import { ToggleContext } from "../../App";

import { StandardColumnGridWrapper } from "../wrappers/index";

import { PrimaryButton, SecondaryButton } from "../buttons/index";
import { ReactComponent as PolygonLogo } from "../../assets/polygon-logo.svg";

import styled from "@emotion/styled";
import { isCompositeComponent } from "react-dom/test-utils";

export const NavBar = () => {
  const Toggled = useContext(ToggleContext);
  useEffect(() => {
    console.log(Toggled);
  }, [Toggled]);
  return (
    <Nav>
      <NavContentWrap>
        <PolygonLogo />
        <StandardColumnGridWrapper className="third-gap">
          <ApiUpIndicator />
          <SecondaryButton>Login</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </StandardColumnGridWrapper>
      </NavContentWrap>
    </Nav>
  );
};

const ApiUpIndicator = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background: var(--main-success-color);
  margin: auto;
  margin-right: calc(var(--main-padding) / 2);
`;
const NavContentWrap = styled.div`
  padding-top: var(--main-padding);
  padding-bottom: var(--main-padding);
  max-width: var(--container-width);
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const Nav = styled.nav`
  min-width: 100vw;
  background: #fff;
`;
