import { useMatches } from "../../lib/hooks/useMatches";

import {
  MatchTrackerHeader,
  MatchTrackerLogo,
  MatchTrackerWrapper,
  MatchErrorWrapper,
  MatchErrorTypographyWrapper,
  MatchErrorTypography,
} from "./MatchTracker.styles";

import AlertTriangle from "../../icons/alert-triangle.svg?react";
import { MatchTrackerButton } from "./components/MatchTrackerButton";
import { MatchesList } from "./components/MatchesList";
import { Loading } from "../Loading";
import { LoadingWrapper } from "../Loading/Loading.styles";

export const MatchTracker = () => {
  const { matches, error, isLoading, revalidate, isFetching } = useMatches();

  return (
    <MatchTrackerWrapper>
      <MatchTrackerHeader>
        <MatchTrackerLogo>Match Tracker</MatchTrackerLogo>

        <MatchErrorWrapper>
          {error && (
            <MatchErrorTypographyWrapper>
              <AlertTriangle />
              <MatchErrorTypography>
                Ошибка: не удалось загрузить информацию
              </MatchErrorTypography>
            </MatchErrorTypographyWrapper>
          )}

          <MatchTrackerButton onRefresh={revalidate} />
        </MatchErrorWrapper>
      </MatchTrackerHeader>

      {isLoading || isFetching ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <MatchesList matchesList={matches} />
      )}
    </MatchTrackerWrapper>
  );
};
