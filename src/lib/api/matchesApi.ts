import { Match, MatchesResponse } from "../../types";

import { queryOptions } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

const API_URL = import.meta.env.VITE_API_URL;

export const matchesApi = {
  baseKey: "matches",

  fetchMatches: async (): Promise<Match[]> => {
    const response = await fetch(`${API_URL}fronttemp`);

    if (!response.ok) {
      throw new Error("Ошибка загрузки матчей");
    }

    const result: MatchesResponse = await response.json();

    return result.data.matches.map((match) => ({
      ...match,
      id: uuidv4(),
    }));
  },

  getMatchesQueryOptions: () => {
    return queryOptions({
      queryKey: [matchesApi.baseKey],
      queryFn: () => matchesApi.fetchMatches(),
    });
  },
};
