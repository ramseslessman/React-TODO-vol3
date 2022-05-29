import React from 'react';

function TodoList(props) {
  return (
    <div className='todoSection'>
      {props.children.length === 0 ? (
        <h1 className='addNewTodo'>AGREGUE UN NUEVO TODO</h1>
      ) : (
        <section>
          <ul>{props.children}</ul>
        </section>
      )}
    </div>
  );
}

export { TodoList };
