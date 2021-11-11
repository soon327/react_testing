import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from '../types/Filter';

const filterSlice = createSlice({
  name: 'fliter',
  initialState: 'ALL' as Filter,
  reducers: {
    applyFilter(state, action: PayloadAction<Filter>) {
      return action.payload;
    },
  },
});

// filterActions.applyFilter === export const {applyFilter} = filterSlice.actions
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
