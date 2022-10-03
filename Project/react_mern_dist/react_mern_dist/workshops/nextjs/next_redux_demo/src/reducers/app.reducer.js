import { APP_FETCHING_SUCCESS } from "../constants";

const initialState = {
  count: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_FETCHING_SUCCESS: 
      return { ...state, count:  state.count + payload};    

    default:
      return state;
  }
};
