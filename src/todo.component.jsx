import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  height: 35px;
  width: 92%;
  background: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 3px 10px;
  font-size: 24px;
  margin-bottom: 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-decoration: ${props => props.isCompleted && 'line-through'};
  }

  
`;

const Button = styled.button`
  width: 30 %;
  height: 30px;
  background: ${props => props.isCompleted ? '#EC4242' : '#606060FF'};
  color: white;
  border: none;
  border-radius: 5px;
`;

const Todo = ({ todo, completeTodo, index, removeTodo }) => {
  return (
    <TodoContainer isCompleted={todo.isCompleted}>
      <p>{todo.text}</p>
      {
        !todo.isCompleted ?
          <Button
            onClick={() => completeTodo(index)}
            completeTodo={completeTodo}
          >
            Complete!
          </Button>
          :
          <Button
            onClick={() => removeTodo(index)}
            isCompleted={todo.isCompleted}
          >
            Remove!
          </Button>
      }
    </TodoContainer>
  );
};

export default Todo;