import { combineReducers } from "redux";
import homeReducer from "./home.reducer";
import appReducer from "./app.reducer";


export default combineReducers({
    appReducer,
    homeReducer,
});