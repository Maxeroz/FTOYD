import { Match } from "../../../../types";
import {
  MatchesListWrapper,
  MatchWrapper,
  MatchTeamLogoWrapper,
  MatchTypography,
  MatchScoreWrapper,
  MatchStatus,
} from "./MatchesList.styles";
import IconTeam from "../../../../icons/icon-team.svg?react";
import { formatMatchStatus } from "./lib/utils/formatMatchStatus";

interface MatchesListProps {
  matchesList: Match[];
}

export const MatchesList = ({ matchesList }: MatchesListProps) => {
  console.log(matchesList);

  return (
    <MatchesListWrapper>
      {matchesList.map((match) => (
        <MatchWrapper key={match.id}>
          <MatchTeamLogoWrapper>
            <IconTeam />
            <MatchTypography>{match.awayTeam.name}</MatchTypography>
          </MatchTeamLogoWrapper>

          <MatchScoreWrapper>
            {match.awayScore} : {match.homeScore}
            <MatchStatus variant={match.status}>
              {formatMatchStatus(match.status)}
            </MatchStatus>
          </MatchScoreWrapper>

          <MatchTeamLogoWrapper>
            <MatchTypography>{match.homeTeam.name}</MatchTypography>
            <IconTeam />
          </MatchTeamLogoWrapper>
        </MatchWrapper>
      ))}
    </MatchesListWrapper>
  );
};
