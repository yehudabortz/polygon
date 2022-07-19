import React from "react";
import { StandardColumnGridWrapper } from "../../components/wrappers/index";

import { TickerBlock } from "../../components/TickerBlock/index";
import styled from "@emotion/styled";
import { useStockData } from "./useStockData";

export const Home = () => {
  const stockData = useStockData();
  return (
    <PageWrap>
      <TickerGrid>
        {/* {stockData.map((s) => { */}
        {stockData.slice(0, 20).map((s) => {
          return <TickerBlock ticker={s["T"]} price={s["o"]} key={s["T"]} />;
        })}
      </TickerGrid>
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
