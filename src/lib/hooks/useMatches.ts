import { useQuery, useQueryClient, useIsFetching } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";

export function useMatches() {
  const queryClient = useQueryClient();

  const {
    data: matches = [],
    isLoading,
    error,
  } = useQuery(matchesApi.getMatchesQueryOptions());

  const revalidate = () => {
    queryClient.invalidateQueries({ queryKey: [matchesApi.baseKey] });
  };

  const isFetching = useIsFetching({ queryKey: [matchesApi.baseKey] }) > 0;

  return { isLoading, matches, error, revalidate, isFetching };
}
