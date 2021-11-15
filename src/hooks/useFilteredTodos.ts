import { useMemo } from 'react';
import { useRootState } from '../_reducer';
import { useFilter } from './useFilter';
import { useTodoActions } from './useTodoActions';

export function useFilteredTodos() {
  const todos = useRootState((state) => state.todos);
  const [filter] = useFilter();

  const filteredTodos = useMemo(
    () => (filter === 'ALL' ? todos : todos.filter((todo) => todo.done === (filter === 'DONE'))),
    [todos, filter]
  );
  const actions = useTodoActions();

  return [filteredTodos, actions] as const;
}
