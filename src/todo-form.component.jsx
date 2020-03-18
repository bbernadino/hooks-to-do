import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 35px;
  width: 100%;
  padding: 3px 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  font-size: 24px;
`;

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Add New To-Do!'
        isCompleted
      />
    </Form>
  );
};

export default TodoForm;