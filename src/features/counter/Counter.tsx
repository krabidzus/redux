import React from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
// @ts-ignore
import { decrement, increment } from '../counter/counterSlice.ts'
// @ts-ignore
import { useAppSelector, useAppDispatch } from '../../hooks.ts'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}