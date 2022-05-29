import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {
    const searchChange = (event) => {
    
    setSearchValue(event.target.value);
  };
  return (
    <input placeholder="Buscar" value={searchValue} onChange={searchChange} className='todoSearch' />  
  );
}


export { TodoSearch };
