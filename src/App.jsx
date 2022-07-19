import styled from "@emotion/styled";
import { useMemo, useState, useEffect } from "react";
import { NavBar } from "./components/navigation/NavBar";
import "./App.scss";
import { Home } from "./pages/Home/index.jsx";
function App() {
  return (
    <>
      <NavBar />
      <AppWrap className="App">
        <Home />
      </AppWrap>
    </>
  );
}

export default App;

export const AppWrap = styled.div`
  background: var(--main-bg-color);
  min-height: 100vh;
  position: relative;
  width: var(--container-width);
  margin: auto;
`;
