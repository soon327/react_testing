import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Todo } from '../types/Todo';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    add: {
      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          done: false,
          text,
        },
      }),
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload);
      },
    },
    toggle(state, action: PayloadAction<string>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (!todo) return;
      todo.done = !todo.done;
    },
    remove(state, action: PayloadAction<string>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
