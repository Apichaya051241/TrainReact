import {
    HOME_FETCHING_SUCCESS
  } from "../constants";
  
  
  const setStateToSuccess = payload => ({
    type: HOME_FETCHING_SUCCESS,
    payload: payload
  });
  
  
  export const loadData = () => {
    return dispatch => {
      dispatch(setStateToSuccess({}));  
    };
  };