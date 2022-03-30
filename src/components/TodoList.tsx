import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

export const TodoList = (props) => {
  const { todos, toggleCompleted } = props

  return (
    <ul className='todos'>
      {todos.map((todo) => <TodoListItem key={todo.id} 
        {...todo} toggleCompleted={toggleCompleted} />)}
    </ul>
  )
}