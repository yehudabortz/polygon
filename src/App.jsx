import styled from "@emotion/styled";

import { Toggle } from "./components/buttons/Toggle";
import { createContext, memo, useState, useEffect } from "react";
import { StandardGridWrap } from "./components/wrappers/index";
import { NavBar } from "./components/navigation/NavBar";
import "./App.scss";
import { Home } from "./pages/Home/index.jsx";
export const ToggleContext = createContext();
export const App = () => {
  const [showRenderCount, setShowRenderCount] = useState(true);
  const handleToggle = () => {
    setShowRenderCount((prev) => !prev);
  };
  return (
    <ToggleContext.Provider value={showRenderCount}>
      <>
        <NavBar />
        <AppWrap className="App">
          <SubNavWrap>
            <PageTitle>Top Performing Stocks</PageTitle>
            <StandardGridWrap className="grid-column">
              <ToggleLabel>Show Ticker Render Counts</ToggleLabel>
              <Toggle onClick={handleToggle} />
            </StandardGridWrap>
          </SubNavWrap>
          <Home />
        </AppWrap>
      </>
    </ToggleContext.Provider>
  );
};

const PageTitle = styled.h1`
  width: 100%;
`;
const AppWrap = styled.div`
  background: var(--main-bg-color);
  min-height: 100vh;
  position: relative;
  width: var(--container-width);
  margin: auto;
`;
const SubNavWrap = styled.div`
  display: flex;
  gap: var(--main-grid-gap);
  margin-top: calc(var(--main-padding) * 2);
  margin-bottom: var(--main-padding);
`;
const ToggleLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: var(--muted-text-color);
  margin: auto;
`;
