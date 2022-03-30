import React from 'react';
import { TodoHeader } from './components/TodoHeader.tsx';
import { TodoList } from './components/TodoList.tsx';
import { TodoFooter } from './components/TodoFooter.tsx';

const defaultTodos = [
  {
    id: '01',
    label: 'Todo 1',
    status: 'completed',
  },
  {
    id: '02',
    label: 'Todo 2',
    status: 'completed',
  },
  {
    id: '03',
    label: 'Todo 3',
    status: 'active',
  },
  {
    id: '04',
    label: 'Todo 4',
    status: 'active',
  }
]

export const TodoApp = props => {
  const [todos, setTodos] = React.useState(defaultTodos);

  return (
    <div>
      <TodoHeader />
      <TodoList todos={todos} />
      <TodoFooter />
    </div>
  )
}