import React from 'react';

export const TodoListItem = (props) => {
  const {id, label, status} = props;

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} /> {label}
      </label>
    </li>
  )
}