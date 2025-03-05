import styled, { keyframes, css } from "styled-components";
import { spacing } from "../../lib/utils/spacing";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 200px)",
});

export const Spinner = styled.div`
  width: ${spacing(10)};
  height: ${spacing(10)};
  border: ${spacing(1)} solid var(--color-black-soft);
  border-top: ${spacing(1)} solid var(--color-status-success-base);
  border-radius: 50%;
  animation: ${css`1s linear infinite ${spin}`};
`;
