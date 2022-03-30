import React from 'react';
import { TodoHeader } from './components/TodoHeader.tsx';
import { TodoList } from './components/TodoList.tsx';
import { TodoFooter } from './components/TodoFooter.tsx';

export const TodoApp = props => {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  )
}