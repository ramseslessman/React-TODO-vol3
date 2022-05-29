import React from 'react';

function TodoItem(props) {
  
  return (
    <div>
      {!modoEdit ? (
        <li className="todoList">
          <button onClick={props.onComplete} className="buttonCompleted">
            {props.todos.completed ? 'completed' : 'complete'}
          </button>
          <p className="todoText">{props.text}</p>
          <h1 onClick={edit} className="buttonEdit">
            
            E
          </h1>
          <h1 onClick={props.onDelete} className="buttonDelete">
            X
          </h1>
        </li>
      ) : (
        <form onSubmit={editSubmit} className="formEdit">
          <input
            className="submitEdit"
            value={todoEdit}
            onChange={editChange}
            placeholder={props.text}
          />
          <button className="Update">Actualizar</button>
        </form>
      )}
    </div>
  );
}

export { TodoItem };
