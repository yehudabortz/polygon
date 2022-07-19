import styled from "@emotion/styled";
export const StandardGridWrap = styled.div`
  display: grid;
  gap: var(--main-grid-gap);
  width: max-content;
`;
export const StandardColumnGridWrapper = styled.div`
  display: grid;

  grid-auto-flow: column;
  gap: var(--main-grid-gap);
  &&.half-gap {
    gap: calc(var(--main-grid-gap) / 2);
  }
  &&.third-gap {
    gap: calc(var(--main-grid-gap) / 3);
  }
`;

export const FlexWithGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--main-grid-gap);
  width: 100%;
`;
