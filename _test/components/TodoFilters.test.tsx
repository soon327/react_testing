import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import prepareReduxWrapper from '@/lib/prepareReduxWrapper';
import TodoFilters from '@/components/TodoFilters';

describe('TodoFilters', () => {
  const setup = () => {
    const [Wrapper, store] = prepareReduxWrapper();
    render(
      <Wrapper>
        <TodoFilters />
      </Wrapper>
    );
    return { store };
  };

  it('renders properly', () => {
    setup();
  });
  it('submit new todo', async () => {
    setup();
    const allButton = await screen.findByText('전체');
    expect(allButton).toBeDisabled();
    const doneButton = await screen.findByText('완료');
    fireEvent.click(doneButton);
    expect(doneButton).toBeDisabled();
    const undoneButton = await screen.findByText('미완료');
    fireEvent.click(undoneButton);
    expect(undoneButton).toBeDisabled();
  });
});
