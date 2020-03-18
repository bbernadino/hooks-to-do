import React from 'react';

import TodoList from './todo-list.component';

import GlobalStyle from './global.styles';

function App() {

  return (
    <div>
      <GlobalStyle />
      <TodoList />
    </div>
  );
}

export default App;
