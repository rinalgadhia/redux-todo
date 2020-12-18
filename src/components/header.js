import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewTodo } from "../redux/todosReducer";

const Header = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if(e.which === 13 && trimmedText) {
      dispatch(saveNewTodo(trimmedText))
      setText('');
    }
  }

  return (
    <header className="header">
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
