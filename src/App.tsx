import React from 'react';
import { TodoHeader } from './components/TodoHeader.tsx';
import { TodoList } from './components/TodoList.tsx';
import { TodoFooter } from './components/TodoFooter.tsx';
import { Todo, Todos, FilterTypes, AppContextProps } from './TodoApp.types';

export const AppContext = React.createContext<AppContextProps>(undefined);

const defaultTodos: Todos = [
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

export const TodoApp = () => {
  const [filter, setFilter] = React.useState<FilterTypes>('all');
  const [todos, setTodos] = React.useState<Todos>(defaultTodos);

  const addTodo = (label: string): void => {
    const getId = () => Date.now().toString();
    const newTodo = {
      id: getId(),
      label: label,
      status: 'active',
    };

    setTodos([...todos, newTodo])
  }

  const toggleCompleted = (id: string) => {
    const newTodos = todos.map((todo): Todo => {
      if (todo.id === id) {
        return {...todo, status: todo.status === 'active' ? 'completed' : 'active' };
      } else {
        return todo;
      }
    })

    setTodos(newTodos);
  }

  const clearCompleted = () => {
    const updateTodos = todos.map((todo): Todo => {
      if (todo.status === 'completed') {
        return {...todo, status: 'cleared'};
      } else {
        return todo;
      }
    })

    setTodos(updateTodos);
  }

  const changeFilter = (filter: FilterTypes) => {
    setFilter(filter);
  }

  const getFilter = () => {
    return filter;
  }

  const getTodos = () => {
    return todos;
  }

  return (
    <AppContext.Provider value={{
      addTodo,
      toggleCompleted,
      clearCompleted,
      changeFilter,
      getFilter,
      getTodos
    }}>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </AppContext.Provider>
  )
}