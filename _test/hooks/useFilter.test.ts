import { act, renderHook } from '@testing-library/react-hooks';
import prepareMockReduxWrapper from '@/lib/prepareMockReduxWrapper';
import { filterActions } from '@/_reducer/filter';
import { useFilter } from '@/hooks/useFilter';
import configureMockStore from 'redux-mock-store';

describe('useFilter', () => {
  const setup = () => {
    const [wrapper, store] = prepareMockReduxWrapper({
      filter: 'ALL',
      todos: [],
    });
    const { result } = renderHook(() => useFilter(), { wrapper });
    return { store, result };
  };
  it('returns filter', () => {
    const { result } = setup();
    expect(result.current[0]).toEqual('ALL');
  });

  it('confirm dispatch', () => {
    const { store, result } = setup();
    // applyFilter 함수를 호출하고
    act(() => {
      result.current[1]('DONE');
    });
    // 해당 액션이 디스패치 됐는지 확인
    expect(store.getActions()).toEqual([filterActions.applyFilter('DONE')]);
  });

  it('dont use redux-mock-store test', () => {
    const initialState = { filter: 'ALL', todos: [] };
    const store = configureMockStore()(initialState);
    store.dispatch(filterActions.applyFilter('DONE'));

    const actions = store.getActions();
    expect(actions[0].type).toEqual('filter/applyFilter');
    expect(actions[0].payload).toEqual('DONE');
  });
});
