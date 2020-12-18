import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { statusFilterChanged } from "../redux/actionTypes";
import { statusFilters } from "../redux/filterReducer";

const RemainingTodos = ({count}) => {
    const suffix = count === 1 ? "" : "s";

    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} left
        </div>
    )
}

const StatusFilter = ({ value: status, onChange }) => {
  
  const renderedList = Object.keys(statusFilters).map((key) => {
    const value = statusFilters[key];
    const handleClick = () => onChange(value)
    const className = value === status ? "selected" : ''

    return (
        <li key={value}>
            <button className={className} onClick={handleClick}> {key} </button>
        </li>
    )
  });
  return (
      <div className="filters statusFilters">
          <h5>Filter by Status</h5>
          <ul>{renderedList}</ul>
      </div>
  ) 
};

// const ColorFilters = ({value: colors, onChange}) => {
//     const renderedColor = availableColors.map((color) => {
//         const checked = colors.includes(color)
//         console.log(checked)
//         const handleChange = () => {
//             const changeType = checked ? 'removed' : 'added'
//             onChange(color, changeType)
//         }
//          return (
//            <div>
//              <label key={color}>
//                <input
//                  type="checkbox"
//                  checked={checked}
//                  onChange={handleChange}
//                  name={color}
//                />
//                <span
//                  className="color-block"
//                  style={{ backgroundColor: color }}
//                ></span>
//                {capitalize(color)}
//              </label>
//            </div>
//          );
//     })
//     return (
//       <div className="filters colorFilters">
//         <h5>Filter by Color</h5>
//         <form className="colorSelection">{renderedColor}</form>
//       </div>
//     );
// }

const Footer = () => {

    const dispatch = useDispatch()

    const todosRemaining = useSelector((state) => {
        const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
        return uncompletedTodos.length
    })

    const { status} = useSelector((state) => state.filters) 

    const onStatusChange = (status) => dispatch({type: statusFilterChanged, payload: status})

    // const onColorChange  = (color, changeType) => dispatch({type: colorFIlterChanged, payload: {color, changeType}})

    return ( 
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button">Mark All Completed</button>
                <button className="button">Clear Completed</button>
            </div>

            <RemainingTodos count={todosRemaining} />
            <StatusFilter value={status} onChange={onStatusChange} />
            {/* <ColorFilters value={colors} onChange={onColorChange} /> */}
        </footer>
     );
}
 
export default Footer;