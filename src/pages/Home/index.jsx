import React, { useState } from "react";
import { useEffect, useLayoutEffect } from "react";
import { StandardColumnGridWrapper } from "../../components/wrappers/index";

import { TickerBlock } from "../../components/TickerBlock/index";
import styled from "@emotion/styled";
import { useStockData } from "./useStockData";

export const Home = () => {
  const stockData = useStockData();

  const [page, setPage] = useState(1);
  const [resultsCountOffset, setResultsCountOffset] = useState(0);

  useLayoutEffect(() => {
    setResultsCountOffset(40);
  }, []);

  // Below, useEffect will paint other components and initial state of the page before resultsCountOffset is set,
  // to simulate this, try setting the default state to 2 and then update it to 5000 in the useEffect.
  // useEffect(() => {
  //   setResultsCountOffset(5000);
  // }, []);
  const loadMoreStocks = (e) => {
    const scrollTop = Math.floor(e?.target?.documentElement?.scrollTop);
    const scrollHeight = e?.target?.documentElement?.scrollHeight;
    const innerHeight = window.innerHeight;

    if (scrollTop + innerHeight === scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", loadMoreStocks);
    // come back to this!
    // return window.removeEventListener("scroll", loadMoreStocks);
  }, []);

  // Line 44-46 manages our mock infinite scroll, and returns the desired amount of components from our stockData array
  return (
    <PageWrap>
      <TickerGrid>
        {stockData.slice(0, page * resultsCountOffset).map((s) => {
          const price = s["o"];
          const ticker = s["T"];
          if (price && ticker) {
            return <TickerBlock ticker={ticker} price={price} key={ticker} />;
          }
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
