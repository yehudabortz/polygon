import React from "react";
import { StandardColumnGridWrapper, FlexWithGap } from "../wrappers/index";
import styled from "@emotion/styled";

export const TickerBlock = ({ ticker }) => {
  return (
    <TickerBlockWrap>
      <StandardColumnGridWrapper className="half-gap">
        <FlexWithGap>
          <Ticker>{ticker.toUpperCase()}</Ticker>
          <span>
            <StockPrice>{"298.70"}</StockPrice>
            <Currency> USD</Currency>
          </span>
        </FlexWithGap>
      </StandardColumnGridWrapper>
    </TickerBlockWrap>
  );
};

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
