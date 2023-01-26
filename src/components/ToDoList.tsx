import React from 'react';
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import todoSlice, { removeTodo } from '../features/todo/todoSlice.tsx';
// @ts-ignore
import { useAppSelector, useAppDispatch } from '../hooks.ts'
import Todo from '../features/todo/todoSlice'
import { AppDispatch, RootState } from '../store';

// new changes

interface TodoType {
    id: string;
    description: string;
    completed: boolean;
}

// branch 222222 new commit

const TodoList = () => {
  //React Redux Hooks
  const todoList = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch();

	return (
		<ul>
			{todoList.map((todo) => (
                <div key={todo.id}>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button> 
                    <li>{todo.description}</li>
                </div>
			))}
		</ul>
	);
};

export default TodoList;