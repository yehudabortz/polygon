import styled from "@emotion/styled";

export const PrimaryButton = styled.button`
  background: var(--main-accent-color);
  width: 100%;
  border-radius: var(--main-border-radius);
  padding: calc(var(--main-padding) / 2);
  padding-top: calc(var(--main-padding) / 3);
  padding-bottom: calc(var(--main-padding) / 3);
  color: var(--secondary-text-color);
  border: solid var(--main-accent-color) 1px;
`;
export const SecondaryButton = styled(PrimaryButton)`
  color: var(--main-text-color);
  background: var(--main-bg-color);
  border: solid var(--main-border-color) 1px;
`;
