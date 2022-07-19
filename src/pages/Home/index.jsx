import React from "react";
import styled from "@emotion/styled";
import axios from "axios";

const stockData = require("../../data.json");

export const Home = () => {
  console.log(stockData);
  return (
    <PageWrap>
      {stockData.map((s) => {
        return <p>{s["T"]}</p>;
      })}
      This is the content
    </PageWrap>
  );
};

export const PageWrap = styled.main`
  padding: var(--main-padding);
  position: relative;
`;
