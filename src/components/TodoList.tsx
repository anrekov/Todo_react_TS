import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  if (todos.length === 0) {
    return <p className='center'>No tasks</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }
        return (
          <li key={todo.id} className={classes.join(' ')}>
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

// onChange={onToggle.bind(null, todo.id)} - вернёт новую функцию но не будет её вызывать
