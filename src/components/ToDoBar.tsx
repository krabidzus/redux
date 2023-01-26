import React from 'react';
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
// @ts-ignore
import ToDoList from './ToDoList.tsx';
// @ts-ignore
import { useAppSelector, useAppDispatch } from '../hooks.ts'
// @ts-ignore
import { addTodo } from '../features/todo/todoSlice.tsx'

interface IFormInput {
  todo: String;
}

export default function ToDo() {
    const dispatch = useAppDispatch()

    
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => dispatch(addTodo(data.todo));

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Add ToDo</label>
        <input {...register("todo", { required: true, maxLength: 100 })} />
        {errors.todo && "Required"}
        <input type="submit" />
        </form>
        <ToDoList />
    </>
  );
}
