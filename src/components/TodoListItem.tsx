import React from 'react';

export const TodoListItem = (props) => {
  const { id, label, status, toggleCompleted } = props;

  const handleCheck = () => {
    toggleCompleted(id)
  }

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} onChange={handleCheck} /> {label}
      </label>
    </li>
  )
}