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

  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, status: todo.status === 'active' ? 'completed' : 'active' };
      } else {
        return todo;
      }
    })

    setTodos(newTodos);
  }

  return (
    <div>
      <TodoHeader />
      <TodoList todos={todos} toggleCompleted={toggleCompleted} />
      <TodoFooter />
    </div>
  )
}