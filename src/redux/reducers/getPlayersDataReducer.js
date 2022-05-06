import { actionTypes } from "../constants/action-types";
const initState = {};
export const getPlayersDataReducer = (state = initState, action) => {
  console.log(action, action.payload);
  const value = action.payload;
  return {
    ...state,
    ...value,
  };
};
