import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

export const TodoList = (props) => {
  const { todos } = props

  return (
    <ul className='todos'>
      {todos.map((todo) => <TodoListItem key={todo.id} {...todo} />)}
    </ul>
  )
}