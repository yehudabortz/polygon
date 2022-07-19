import React from "react";
import { StandardColumnGridWrapper } from "../../components/wrappers/index";
import { TickerBlock } from "../../components/TickerBlock/index";
import styled from "@emotion/styled";

const stockData = require("../../data.json");

export const Home = () => {
  console.log(stockData);
  return (
    <PageWrap>
      <TickerGrid>
        {stockData.map((s) => {
          return <TickerBlock ticker={s["T"]} />;
        })}
      </TickerGrid>
      This is the content
    </PageWrap>
  );
};

export const PageWrap = styled.main`
  padding-top: var(--main-padding);
  padding-bottom: var(--main-padding);
  position: relative;
`;
export const TickerGrid = styled(StandardColumnGridWrapper)`
  grid-auto-flow: unset;
  grid-template-columns: repeat(5, 1fr);
`;
