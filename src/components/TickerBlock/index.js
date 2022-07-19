import React, { useEffect, useLayoutEffect, useState } from "react";
import { StandardColumnGridWrapper, FlexWithGap } from "../wrappers/index";
import styled from "@emotion/styled";
import { memo } from "react";
export const TickerBlock = memo(({ ticker, price, ...props }) => {
  const [renderCount, setRenderCount] = useState(1);

  // useEffect creates delay on rendering the renderCount because it paints the page before updating state.
  useLayoutEffect(() => {
    // price change triggers re-render of component
    setRenderCount((prev) => prev + 1);
  }, [price]);
  return (
    <>
      <TickerBlockWrap {...props}>
        <StandardColumnGridWrapper className="half-gap">
          <FlexWithGap>
            <Ticker>{ticker.toUpperCase()}</Ticker>
            <span>
              <StockPrice>{price}</StockPrice>
              <Currency> USD</Currency>
            </span>
          </FlexWithGap>
        </StandardColumnGridWrapper>
        <p>{renderCount}</p>
      </TickerBlockWrap>
    </>
  );
});

export const TickerBlockWrap = styled.div`
  border: solid var(--main-accent-color) 1px;
  border-radius: var(--main-border-radius);
  padding: var(--main-padding);
`;
export const StockPrice = styled.span`
  font-weight: 900;
  font-size: 18px;
`;
export const Ticker = styled.span`
  font-size: 14px;
  font-weight: 800;
`;
export const Currency = styled.span`
  font-size: 12px;
`;
