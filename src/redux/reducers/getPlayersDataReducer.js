const initState = {};
export const getPlayersDataReducer = (state = initState, action) => {
  const value = action.payload;
  return {
    ...state,
    ...value,
  };
};
