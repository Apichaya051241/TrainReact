import { APP_FETCHING_SUCCESS } from "../constants";
  
  
  const setStateToSuccess = payload => ({
    type: APP_FETCHING_SUCCESS,
    payload: payload
  });
  
  
  export const loadData = () => {
    return dispatch => {
      dispatch(setStateToSuccess(1));  
    };
  };