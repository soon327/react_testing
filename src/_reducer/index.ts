import { combineReducers } from 'redux';
import { useSelector } from 'react-redux';
import filter from './filter';

const rootReducer = combineReducers({
  filter,
});

export type RootState = ReturnType<typeof rootReducer>;

// useSelector를 사용할때 매번 RootState로 타입지정을 해줘야하기때문에 이를 생략하기위한 hook
type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export function useRootState<T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) {
  return useSelector(selector, equalityFn);
}

export default rootReducer;
