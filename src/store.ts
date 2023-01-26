import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
import counterReducer from '../src/features/counter/counterSlice.ts'
// @ts-ignore
import todoReducer from './features/todo/todoSlice.tsx'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch