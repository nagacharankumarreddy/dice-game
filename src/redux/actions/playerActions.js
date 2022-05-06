import { actionTypes } from "../constants/action-types";
export const getPlayersDetails = (data) => {
  return {
    type: actionTypes.PLAYERS_DATA,
    payload: data,
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
