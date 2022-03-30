import React from 'react';

export const TodoHeader = (props) => {
  const [inputText, setInputText] = React.useState('');
  const { filter, setFilter, addTodo } = props;

  const onInput = (e) => {
    setInputText(e.target.value);
  }

  const onSubmit = () => {
    if (inputText.length > 0) {
      addTodo(inputText);
    }

    setInputText('');
  }

  const onFilter = (e) => {
    setFilter(e.currentTarget.textContent);
  }

  return (
    <header>
      <h1>todos<small>(Basic implementation)</small></h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" 
          value={inputText} onChange={onInput} />
        <button className="submit" onClick={onSubmit} >Add</button>
      </div>
      <nav className="filter">
        <button className={filter === 'all' ? 'selected' : ''} onClick={onFilter} >all</button>
        <button className={filter === 'active' ? 'selected' : ''} onClick={onFilter} >active</button>
        <button className={filter === 'completed' ? 'selected' : ''} onClick={onFilter} >completed</button>
      </nav>
    </header>
  )
}