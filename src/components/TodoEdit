import React from 'react';
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

function TodoEdit(props) {
  return (
    <TodoItem
      editChange={editChange}
      editSubmit={editSubmit}
      todoEdit={todoEdit}

    />
  );
}

export { TodoEdit };