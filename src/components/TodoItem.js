import React from 'react';

function TodoItem(props) {
  const [modoEdit, setModoEdit] = React.useState(false);
  const [todoEdit, setTodoEdit] = React.useState(props.text);

  const edit = () => {
    setModoEdit(true);
  };

  const editChange = (event) => {
    setTodoEdit(event.target.value);
  };

  const editSubmit = (event) => {
    event.preventDefault();
    props.todoUpdate(props.id, todoEdit);
    setTodoEdit(todoEdit);
    setModoEdit(false);
  };
  return (
    <div>
      {!modoEdit ? (
        <li className="todoList">
          <input
            type="checkbox"
            onClick={props.onComplete}
            className="buttonCompleted"
          />
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
          <h1 className="Update" onClick={editSubmit}>
            U
          </h1>
        </form>
      )}
    </div>
  );
}

export { TodoItem };
