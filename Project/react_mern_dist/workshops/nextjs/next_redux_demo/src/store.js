import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger";
import reducers from "./../src/reducers";
import { composeWithDevTools } from 'redux-devtools-extension'


const dev_middlewares = [];
if (process.env.NODE_ENV === `development`) {
  dev_middlewares.push(logger);
}


export function initializeStore (initialState) {  
   return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk, ...dev_middlewares)));
  }