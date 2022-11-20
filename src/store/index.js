import { applyMiddleware, combineReducers, createStore  } from "redux";
import todoReducer from "./reducers/todos.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';
import thunkMiddleware from 'redux-thunk'
const middleWares =[logger,thunkMiddleware]
const middleWareEnchancer = applyMiddleware(...middleWares)
const enchancers = [middleWareEnchancer]
const composedEnchancers = composeWithDevTools(...enchancers)
const rootReducer = combineReducers({
    Todo: todoReducer,
  });
const store = createStore(
    rootReducer,
    composedEnchancers
)
export default store