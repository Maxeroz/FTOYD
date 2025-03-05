import styled from "styled-components";
import { spacing } from "../../../../lib/utils/spacing";

export const MatchTrackerButtonWrapper = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing(2.5),
  padding: `${spacing(4.25)} ${spacing(10)}`,
  background: "var(--color-status-error-light)",
  color: "var(--color-base-white)",
  borderRadius: "var(--border-radius-small)",
  fontWeight: "var(--font-weight-semi-bold)",
  fontSize: spacing(4.5),
  lineHeight: "21.78px",
  transition: "background 0.3s ease",

  "&:hover": {
    background: "var(--color-status-error-base)",
  },

  "&:active": {
    background: "var(--color-status-error-dark)",
  },
});
