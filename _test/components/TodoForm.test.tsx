import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import prepareMockReduxWrapper from '@/lib/prepareMockReduxWrapper';
import TodoForm from '@/components/TodoForm';
import { todosActions } from '@/_reducer/todos';

describe('TodoForm', () => {
  const setup = () => {
    const [Wrapper, store] = prepareMockReduxWrapper();
    render(
      <Wrapper>
        <TodoForm />
      </Wrapper>
    );
    return { store };
  };

  it('renders properly', () => {
    setup();
  });
  it('submit new todo', async () => {
    const { store } = setup();
    const input = await screen.findByPlaceholderText('할 일을 입력하세요.');
    fireEvent.change(input, {
      value: '컴포넌트 만들기',
    });
    fireEvent.submit(input);
    expect(input).toHaveValue(''); // 인풋이 비었는지 확인
    expect(store.getActions().filter((action) => action.type === todosActions.add.type)).toHaveLength(1); // 액션이 디스패치 됐는지 확인
  });
});
