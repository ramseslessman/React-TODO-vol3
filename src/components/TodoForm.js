import React from 'react';

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [error, setError] = React.useState(true);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim() !== '') {
      props.addTodo(newTodoValue);
      setNewTodoValue('');
      setError(true);
    } else {
      setError(false);
      setNewTodoValue('');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='formAddList'>
        <input
          className='inputAdd'
          type="text"
          placeholder="Ingrese un Nuevo TODO"
          value={newTodoValue}
          onChange={onChange}
        />
        <button
         className='buttonSubmitAdd'
         type="submit"
         >+</button>
      </form>
      {!error && <a className='todoError'> Ingrese un TODO Válido </a>}
    </div>
  );
}

export { TodoForm };
