import React, { ChangeEventHandler, MouseEventHandler, useState, useContext } from 'react';
import { FilterTypes } from '../TodoApp.types';
import { AppContext } from '../App.tsx';

export const TodoHeader = () => {
  const [inputText, setInputText] = useState<string>('');
  const { getFilter, changeFilter, addTodo } = useContext(AppContext);

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  }

  const onSubmit = () => {
    if (inputText.length > 0) {
      addTodo(inputText);
    }

    setInputText('');
  }

  const onFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
    changeFilter(e.currentTarget.textContent as FilterTypes);
  }

  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" 
          value={inputText} onChange={onInput} />
        <button className="submit" onClick={onSubmit} >Add</button>
      </div>
      <nav className="filter">
        <button className={getFilter() === 'all' ? 'selected' : ''} onClick={onFilter} >all</button>
        <button className={getFilter() === 'active' ? 'selected' : ''} onClick={onFilter} >active</button>
        <button className={getFilter() === 'completed' ? 'selected' : ''} onClick={onFilter} >completed</button>
      </nav>
    </header>
  )
}