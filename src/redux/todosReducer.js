import { client } from "../api/client";
import { allCompleted, colorSelected, completedClear, todoAdded, todoDeleted, todosLoaded, todoToogled } from "./actionTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case todoAdded: {
            return [...state, action.payload]
        }

        case todoToogled: {
            return state.map((todo) => {
                if(todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }

        case colorSelected: {
            const {color, todoId} = action.payload
            return state.map((todo) => {
                if(todo.id !== todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color
                }
            })
        }

        case todoDeleted: {
            return state.filter((todo) => todo.id !== action.payload)
        }

        case allCompleted: {
            return state.map((todo) => {
                return {...todo, completed: true}
            })
        }

        case completedClear: {
            return state.map.filter((todo) => !todo.completed)
        }

        case todosLoaded: {
            return action.payload
        }

        default:
            return state
    }
}

export default todoReducer;

export async function fetchTodos(dispatch, getState) {
    const response = await client.get("/fakeApi/todos");
    dispatch({type: todosLoaded, payload: response.todos})
}

export function saveNewTodo(text) {
    return async function saveNewTodoThunk(dispatch, getState) {
        const initialTodo = { text };
        const response = await client.post("/fakeApi/todos", {todo: initialTodo})
        dispatch({type: todoAdded, payload: response.todo})
    }
}