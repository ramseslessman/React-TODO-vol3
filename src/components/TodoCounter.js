import React from 'react';

function TodoCounter({total, completed }) {
  return <h3 className='counter'> Has Completado {completed} de {total} TODOs </h3>;
}

export { TodoCounter };
