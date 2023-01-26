import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

export interface Todo {
    id: string;
    description: string;
    completed: boolean;
  }

const initialState = [] as Todo[];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
              state.push(action.payload);
            },
            prepare: (description: string) => ({
              payload: {
                id: uuidv4(),
                description,
                completed: false,
              } as Todo,
            }),
          },
          removeTodo(state, action: PayloadAction<string>) {
            const index = state.findIndex((todo) => todo.id === action.payload)
            state.splice(index, 1)
          }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer