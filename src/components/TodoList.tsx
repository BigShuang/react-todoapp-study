import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

export const TodoList = () => {
  return (
    <ul className='todos'>
      {['01', '02', '03', '04'].map((todo) => <TodoListItem />)}
    </ul>
  )
}