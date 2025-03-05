import { MatchTrackerButtonWrapper } from "./MatchTrackerButton.styles";
import Refresh from "../../../../icons/Refresh.svg?react";

interface MatchTrackerButtonProps {
  onRefresh: () => void;
}

export const MatchTrackerButton = ({ onRefresh }: MatchTrackerButtonProps) => {
  return (
    <MatchTrackerButtonWrapper onClick={onRefresh}>
      Обновить
      <Refresh />
    </MatchTrackerButtonWrapper>
  );
};
