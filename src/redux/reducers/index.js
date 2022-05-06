import { combineReducers } from "redux";
import { rollReducer } from "./rollReducer";
import { getPlayersDataReducer } from "./getPlayersDataReducer";
export const rootReducer = combineReducers({
  getPlayersDataReducer: getPlayersDataReducer,
  rollReducer: rollReducer,
});
