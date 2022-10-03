import { HOME_FETCHING_SUCCESS } from "../constants";

const initialState = {
    data: null
}

export default (state = initialState, {type, payload}) => {
  switch (type) {

  case HOME_FETCHING_SUCCESS:
    return { ...state };

  default:  
    return state
  }
};
