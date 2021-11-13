import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todosActions } from '../_reducer/todos';

// dispatch생략하고 reducer함수 바로 실행하기 위한 hook
// const {add} = useTodoActions()
// add(text)

export function useTodoActions() {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(todosActions, dispatch), [dispatch]);
}
