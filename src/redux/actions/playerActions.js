import { actionTypes } from "../constants/action-types";
export const getPlayersDetails = (name) => {
  return {
    type: actionTypes.PLAYERS_DATA,
    payload: name,
  };
};

export const setOneScore = (score) => {
  return {
    type: actionTypes.ROLL_PLAYER1,
    payload: score,
  };
};

export const setTwoScore = (score) => {
  return {
    type: actionTypes.ROLL_PLAYER2,
    payload: score,
  };
};
