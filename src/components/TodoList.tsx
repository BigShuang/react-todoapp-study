import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';
import { FilterTypes, Todos } from '../TodoApp.types';

interface TodoListProps {
  filter: FilterTypes;
  toggleCompleted: (id: string) => void;
  todos: Todos;
}

export const TodoList = (props: TodoListProps) => {
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