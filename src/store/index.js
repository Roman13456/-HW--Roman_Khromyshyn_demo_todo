import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todos.reducers";

const rootReducer = combineReducers({
    todos: todoReducer,
  });
const store = createStore(
    rootReducer
)
export default store