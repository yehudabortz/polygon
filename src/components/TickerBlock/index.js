import React, { useLayoutEffect, useState, memo, useContext } from "react";
import { StandardColumnGridWrapper, FlexWithGap } from "../wrappers/index";
import styled from "@emotion/styled";
import { ToggleContext } from "../../App";
export const TickerBlock = memo(({ ticker, price, ...props }) => {
  const [renderCount, setRenderCount] = useState(1);

  // useEffect creates delay on rendering the renderCount because it paints the page before updating state.

  useLayoutEffect(() => {
    // price change triggers re-render of component
    setRenderCount((prev) => prev + 1);
  }, [price]);

  const Toggled = useContext(ToggleContext);

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
        {Toggled ? (
          <RenderCountDisplay>Rendered x {renderCount}</RenderCountDisplay>
        ) : (
          <></>
        )}
      </TickerBlockWrap>
    </>
  );
});

const TickerBlockWrap = styled.div`
  border: solid var(--main-accent-color) 1px;
  border-radius: var(--main-border-radius);
  padding: var(--main-padding);
  position: relative;
`;
const StockPrice = styled.span`
  font-weight: 900;

  font-size: 18px;
`;
const Ticker = styled.span`
  font-size: 22px;
  font-weight: 800;
`;
const Currency = styled.span`
  font-size: 12px;
`;
const RenderCountDisplay = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--main-accent-color);
  padding: calc(var(--main-padding) / 4);
  font-size: 10px;
  color: var(--secondary-text-color);
  border-radius: var(--main-border-radius) 0 calc(var(--main-border-radius) / 2)
    0;
`;
