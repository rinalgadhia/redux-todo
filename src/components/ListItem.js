import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoDeleted, todoToogled } from "../redux/actionTypes"
// import { availableColors, capitalize } from "../redux/filterReducer"

const selecteTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId)
}

const ListItem = ({id}) => {

    const todo = useSelector((state) => selecteTodoById(state, id))
    const {text, completed} = todo;  

    const dispatch = useDispatch()

    const handleCompletedChanged = () => {
      dispatch({ type: todoToogled, payload: todo.id });
    };

    const onDelete = () => {
        dispatch({ type: todoDeleted, payload: todo.id})
    }

    // const handleColorChanged = (e) => {
    //   const color = e.target.value;
    //   dispatch({
    //     type: "todos/colorSelected",
    //     payload: { todoId: todo.id, color },
    //   });
    // };

    // const colorOptions = availableColors.map((c) => (
    //   <option key={c} value={c}>
    //     {capitalize(c)}
    //   </option>
    // ));

    return (
      <li>
        <div className="view">
          <div className="segment label">
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={handleCompletedChanged}
            />
            <div className="todo-text">{text}</div>
          </div>
          <div className="segment buttons">
            {/* <select className="colorPicker" value={color} style={{color}} onChange={handleColorChanged}>
              <option value=""></option>
              {colorOptions}
            </select> */}
            <button className="destroy" onClick={onDelete}>
              X
            </button>
          </div>
        </div>
      </li>
    );
}
 
export default ListItem;