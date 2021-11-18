import { createStore } from 'redux';
import rootReducer, { RootState } from '../_reducer';

function configureStore(initialState?: RootState) {
  return createStore(rootReducer, initialState);
}

export default configureStore;
