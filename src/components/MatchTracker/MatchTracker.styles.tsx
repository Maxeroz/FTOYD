import styled from "styled-components";
import { spacing } from "../../lib/utils/spacing";

export const MatchTrackerWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: spacing(10.5),
  gap: spacing(5),
});

export const MatchTrackerHeader = styled("header")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: spacing(14),
});

export const MatchTrackerLogo = styled("span")({
  fontFamily: "Tactic Sans Extended",
  fontSize: spacing(8),
  fontStyle: "italic",
  fontWeight: "var(--font-weight-semi-bold)",
  lineHeight: spacing(8),
});

export const MatchErrorWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing(3),
});

export const MatchErrorTypographyWrapper = styled("div")({
  padding: `${spacing(4.24)} ${spacing(6)}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing(2.5),
  background: "var(--color-black-soft)",
  borderRadius: "var(--border-radius-small)",
});

export const MatchErrorTypography = styled("p")({
  fontSize: "18px",
  fontWeight: "var(--font-weight-medium)",
  lineHeight: "21.78px",
});
