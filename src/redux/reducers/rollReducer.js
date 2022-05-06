import { actionTypes } from "../constants/action-types";
const initState = {
  player1: 0,
  player2: 0,
};
export const rollReducer = (state = initState, action) => {
  if (action.type === actionTypes.ROLL_PLAYER1) {
    console.log("1");
    return { ...state, player1: action.payload };
  } else if (action.type === actionTypes.ROLL_PLAYER2) {
    console.log("2");

    return { ...state, player2: action.payload };
  } else {
    return { ...state };
  }
};
