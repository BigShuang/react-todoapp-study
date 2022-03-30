import React from 'react';
import { AppContext } from '../App.tsx';

export const TodoFooter = () => {
  const { clearCompleted, getTodos } = React.useContext(AppContext);
  const itemCount = getTodos().filter((todo) => todo.status === 'active').length;

  return (
    <footer>
      <span>{itemCount} item{itemCount === 1 ? '' : 's'} left</span>
      <button className="submit" onClick={clearCompleted} >Clear Completed</button>
    </footer>
  )
}