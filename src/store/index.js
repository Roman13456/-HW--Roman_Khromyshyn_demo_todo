import { combineReducers, createStore } from "redux";
import popupReducer from "./reducers/popup.reducer";
import todoReducer from "./reducers/todos.reducers";

const rootReducer = combineReducers({
    todos: todoReducer,
    popup: popupReducer
  });
const store = createStore(
    rootReducer
)
export default store