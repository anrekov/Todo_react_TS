import { Input } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoFormProps {
  onAdd(title: string): void;
}

const StyledDiv = styled.div`
  margin: 2rem 0;
`;

const StyledInput = styled(Input)`
  border-width: 0 0 1px 0; /* top right bottom left */
  border-style: solid;
  border-color: red;

  &:hover {
    border-color: blue;
    border-right-width: 0px !important;
  }

  &:focus {
    box-shadow: 0 0 0 0 rgb(24 144 255 / 20%);
    border-right-width: 0px !important;
  }
`;

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState('')  // TS automatically use here 'string' because default value is string
  const [title, setTitle] = useState<string>('');

  // const ref = useRef<HTMLInputElement>(null)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      // console.log(ref.current!.value)  // ! - ignore possibly warning
      // props.onAdd(ref.current!.value)
      props.onAdd(title);
      // ref.current!.value = '';
      // console.log(title);
      setTitle('');
    }
  };

  return (
    <StyledDiv>
      <StyledInput
        onChange={changeHandler}
        value={title}
        // ref={ref}
        type='text'
        id='title'
        placeholder='Write your task'
        onKeyPress={keyPressHandler}
      />
    </StyledDiv>
  );
};

export default TodoForm;
