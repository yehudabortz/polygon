import React, { useRef, memo, useContext } from "react";
import { StandardColumnGridWrapper, FlexWithGap } from "../wrappers/index";
import styled from "@emotion/styled";
import { ToggleContext } from "../../App";

export const TickerBlock = memo(({ ticker, price, ...props }) => {
  const Toggled = useContext(ToggleContext);
  const renders = useRef(1);

  // When Toggled, component render count will increase, since data entering this component has changed.
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
        <RenderCountDisplay
          className={Toggled ? "show-render-count" : "hide-render-count"}
        >
          Rendered x {renders.current++}
        </RenderCountDisplay>
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
  font-weight: 500;
  font-size: 18px;
`;
const Ticker = styled.span`
  font-size: 22px;
  font-weight: 800;
`;
const Currency = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: var(--muted-text-color);
`;
const RenderCountDisplay = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: calc(var(--main-padding) / 4);
  font-size: 10px;
  color: var(--secondary-text-color);
  border-radius: var(--main-border-radius) 0 calc(var(--main-border-radius) / 2);
  background: var(--main-accent-color);
  &&.show-render-count {
    animation: show-render-count var(--main-render-time) ease-in-out forwards;
  }
  &&.hide-render-count {
    animation: hide-render-count var(--main-render-time) ease-in-out forwards;
  }
  @keyframes show-render-count {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes hide-render-count {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
