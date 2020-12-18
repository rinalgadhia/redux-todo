import {combineReducers} from "redux"
import filterReducer from "./redux/filterReducer"
import todoReducer from "./redux/todosReducer";

const rootReducer = combineReducers({
    filters: filterReducer,
    todos: todoReducer,
})

export default rootReducer;