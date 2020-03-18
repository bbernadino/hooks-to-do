import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  height: 35px;
  width: 92%;
  background: ${props => props.isCompleted ? '#606060FF' : '#fff'};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 3px 10px;
  font-size: 24px;
  margin-bottom: 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.025);
  }

  p {
    text-decoration: ${props => props.isCompleted && 'line-through'};
    color: ${props => props.isCompleted ? 'white' : 'black'}
  }
`;

const CompleteButton = styled.button`
  width: 30%;
  height: 30px;
  background: #606060FF;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    border: 2px solid #D6ED17FF;
    color: #D6ED17FF;
  }
`;

const RemoveButton = styled.button`
  width: 30%;
  height: 30px;
  background: #EC4242;
  color: 606060FF;
  font-size: 14px;
  border: none;
  border-radius: 5px;

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

// ${props => props.isCompleted ? '#EC4242' : '#606060FF'};

const Todo = ({ todo, completeTodo, index, removeTodo }) => {
  return (
    <TodoContainer isCompleted={todo.isCompleted}>
      {!todo ? <p>Please Add a to do Down Below!</p> : <p>{todo.text}</p>}
      {
        !todo.isCompleted ?
          <CompleteButton
            onClick={() => completeTodo(index)}
          >
            Complete!
          </CompleteButton>
          :
          <RemoveButton
            onClick={() => removeTodo(index)}
          >
            Remove!
          </RemoveButton>
      }
    </TodoContainer>
  );
};

export default Todo;