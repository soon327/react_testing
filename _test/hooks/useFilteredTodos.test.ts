import { renderHook, act } from '@testing-library/react-hooks';
import prepareReduxWrapper from '../../src/lib/prepareReduxWrapper';
import { RootState } from '../../src/_reducer';
import { filterActions } from '../../src/_reducer/filter';
import { useFilteredTodos } from '../../src/hooks/useFilteredTodos';

describe('useFilteredTodos', () => {
  const initialState: RootState = {
    filter: 'ALL',
    todos: [
      {
        id: '1',
        text: '컴포넌트 만들기',
        done: false,
      },
      {
        id: '2',
        text: '테스트 코드 작성하기',
        done: false,
      },
    ],
  };
  const setup = () => {
    const [wrapper, store] = prepareReduxWrapper(initialState);
    const { result } = renderHook(() => useFilteredTodos(), { wrapper });
    return { store, result };
  };

  it('properly shows todos', () => {
    const { result } = setup();

    expect(result.current[0]).toHaveLength(2);
  });

  it('toggles todo', () => {
    const { result } = setup();
    // 첫번째 항목 토글
    act(() => {
      result.current[1].toggle('1');
    });
    expect(result.current[0][0].done).toBe(true);
    act(() => {
      result.current[1].toggle('1');
    });
    expect(result.current[0][0].done).toBe(false);
  });

  it('filters todos', () => {
    const { result, store } = setup();
    // 첫번째 항목 토글
    act(() => {
      result.current[1].toggle('1');
    });
    // store를 통하여 filter 직접 변경
    store.dispatch(filterActions.applyFilter('DONE'));
    expect(result.current[0][0].text).toBe('컴포넌트 만들기');
    expect(result.current[0].length).toBe(1);
    // UNDONE filter 확인
    store.dispatch(filterActions.applyFilter('UNDONE'));
    expect(result.current[0][0].text).toBe('테스트 코드 작성하기');
    expect(result.current[0].length).toBe(1);
    // ALL filter 확인
    store.dispatch(filterActions.applyFilter('ALL'));
    expect(result.current[0].length).toBe(2);
  });

  it('removes todo', () => {
    const { result } = setup();
    // 첫번째 항목 제거
    act(() => {
      result.current[1].remove('1');
    });
    expect(result.current[0][0].text).toBe('테스트 코드 작성하기');
  });
});
