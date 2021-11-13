import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRootState } from '../_reducer';
import { filterActions } from '../_reducer/filter';

export function useFilter() {
  const filter = useRootState((state) => state.filter);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators(filterActions, dispatch), [dispatch]);
  return [filter, actions.applyFilter];
}
