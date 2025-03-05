export type Player = {
  username: string;
  kills: number;
};

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
};

export type MatchStatus = "Scheduled" | "Ongoing" | "Finished";

export type Match = {
  id: string;
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};

export type MatchesResponse = {
  ok: true;
  data: {
    matches: Match[];
  };
};
