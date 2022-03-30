import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';
import { AppContext } from '../App.tsx';


export const TodoList = () => {
  const { getTodos, getFilter } = React.useContext(AppContext);

  const filteredTodos = getTodos().filter((todo) => {
    if (todo.status === 'cleared') {
      return false;
    }

    if (getFilter() === 'all') {
      return true;
    } else if (getFilter() === 'completed') {
      return todo.status === 'completed';
    } else if (getFilter() === 'active') {
      return todo.status === 'active';
    }

    return false;
  })

  return (
    <ul className='todos'>
      {filteredTodos.map((todo) => <TodoListItem key={todo.id} 
        {...todo} />)}
    </ul>
  )
}