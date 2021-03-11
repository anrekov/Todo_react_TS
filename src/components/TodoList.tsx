import React from 'react';
import { ITodo } from '../interfaces';
import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

const StyledSpan = styled.span`
  text-decoration: line-through;
`;

const TodoLabel = styled.label`
  font-size: 1.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  background: #f3f3f3;
  color: rgba(0, 0, 0, 0.6);
`;

const TodoI = styled.i`
  z-index: 2;
`;

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  if (todos.length === 0) {
    return <p className='center'>No tasks</p>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <p key={todo.id}>
            <TodoLabel>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              {todo.completed ? (
                <StyledSpan>{todo.title}</StyledSpan>
              ) : (
                <span>{todo.title}</span>
              )}
              <TodoI onClick={(event) => removeHandler(event, todo.id)}>
                <DeleteOutlined />
              </TodoI>
            </TodoLabel>
          </p>
        );
      })}
    </div>
  );
};

export default TodoList;

// onChange={onToggle.bind(null, todo.id)} - вернёт новую функцию но не будет её вызывать
