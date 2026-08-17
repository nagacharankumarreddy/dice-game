import { actionTypes } from "../constants/action-types";

const initState = {
  player1: "",
  player2: "",
  target: 0,
};

export const getPlayersDataReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PLAYERS_DATA:
      return {
        ...state,
        player1: action.payload.player1,
        player2: action.payload.player2,
        target: action.payload.target,
      };
    default:
      return state;
  }
};
