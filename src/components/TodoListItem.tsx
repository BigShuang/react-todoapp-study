import React from 'react';
import { AppContext } from '../App.tsx';

export const TodoListItem = (props: Todo) => {
  const { id, label, status } = props;
  const { toggleCompleted } = React.useContext(AppContext);

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