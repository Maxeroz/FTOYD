import styled from "styled-components";
import { spacing } from "../../../../lib/utils/spacing";
import { MatchStatus as MatchStatusType } from "../../../../types";

interface MatchStatusProps {
  variant: MatchStatusType;
}

export const MatchesListWrapper = styled("ul")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing(3),
});

export const MatchWrapper = styled("li")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${spacing(4)} ${spacing(9)}`,
  background: "var(--color-black-strong)",
  borderRadius: spacing(1),
});

export const MatchTeamLogoWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing(3.5),
});

export const MatchTypography = styled("span")({
  fontSize: spacing(4),
  fontWeight: "var(--font-weight-semi-bold)",
  lineHeight: "19.36px",
});

export const MatchScoreWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing(1),
});

export const MatchScore = styled("div")({
  fontSize: spacing(5),
  fontWeight: "var(--font-weight-semi-bold)",
  lineHeight: spacing(6),
});

export const MatchStatus = styled.div<MatchStatusProps>(({ variant }) => ({
  color: "var(--color-base-white)",
  fontSize: spacing(3),
  lineHeight: spacing(3.5),
  fontWeight: "var(--font-weight-semi-bold)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: variant === "Scheduled" ? spacing(28) : spacing(23),
  width: variant === "Scheduled" ? spacing(28) : "auto",
  height: spacing(6.75),
  borderRadius: spacing(1),
  background:
    variant === "Scheduled"
      ? "var(--color-status-scheduled)"
      : variant === "Ongoing"
      ? "var(--color-status-success-base)"
      : "var(--color-status-error-light)",
}));
