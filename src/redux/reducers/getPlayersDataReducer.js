import { actionTypes } from "../constants/action-types";
const initState = {
  playerone: "",
  playertwo: "",
  target: 0,
};
export const getPlayersDataReducer = (state = initState, action) => {
  return {
    ...state,
    playerone: action.payload.playerone,
    playertwo: action.payload.playertwo,
    target: action.payload.target,
  };
};
