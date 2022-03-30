import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

export const TodoList = (props) => {
  const { todos, filter, toggleCompleted } = props

  const filteredTodos = todos.filter((todo) => {
    if (todo.status === 'cleared') {
      return false;
    }

    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.status === 'completed';
    } else if (filter === 'active') {
      return todo.status === 'active';
    }

    return false;
  })

  return (
    <ul className='todos'>
      {filteredTodos.map((todo) => <TodoListItem key={todo.id} 
        {...todo} toggleCompleted={toggleCompleted} />)}
    </ul>
  )
}