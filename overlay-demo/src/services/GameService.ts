import { USPlayer } from "../models/UpdateState/USPlayer";

const getOrangeTeam = (players: USPlayer[]): USPlayer[] => {
  return players.filter((player) => player.team === 1);
};

const getBlueTeam = (players: USPlayer[]): USPlayer[] => {
  return players.filter((player) => player.team === 0);
};

const getPlayerFromTarget = (
  players: USPlayer[],
  target: string
): USPlayer | undefined => {
  return players.find((player) => target.includes(player.name));
};

const getClockfromSeconds = (seconds: number, isOT: boolean): String => {
  const numMinutes = Math.floor(seconds / 60);
  const numSeconds = seconds - numMinutes * 60;
  const secondsString =
    numSeconds > 9 ? numSeconds.toString() : `0${numSeconds}`;
  return isOT
    ? `+${numMinutes}:${secondsString}`
    : `${numMinutes}:${secondsString}`;
};

const getScoreFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.score);
};

const getGoalsFromPlayers = (players: USPlayer[]): number[] => {
  return players.map((player) => player.goals);
};

const getAssistsFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.assists);
};

const getShotsFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.shots);
};

const getSavesFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.saves);
};

const getDemosFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.demos);
};

const GetTeamFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.team);
};

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
  getPlayerFromTarget,
  getClockfromSeconds,
  getScoreFromPlayers,
  getGoalsFromPlayers,
  getAssistsFromPlayers,
  getShotsFromPlayers,
  getSavesFromPlayers,
  getDemosFromPlayers,
  GetTeamFromPlayers,
};
