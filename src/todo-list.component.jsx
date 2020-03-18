import React, { useState } from 'react';
import styled from 'styled-components';

import Todo from './todo.component';
import TodoForm from './todo-form.component';

const TodoListContainer = styled.div`
  background: #D6ED17FF;
  border-radius: 4px;
  padding: 15px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const TodoList = () => {

  const [todos, setTodos] = useState([
    {
      text: 'Learn React Hooks well',
      isCompleted: false
    },
    {
      text: 'Get outta dodge partner.',
      isCompleted: false
    },
    {
      text: 'Create this todo list',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm
        addTodo={addTodo}
      />
    </TodoListContainer>
  );
}

export default TodoList;