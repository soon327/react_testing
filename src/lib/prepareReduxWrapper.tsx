import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { RootState } from '../_reducer';

function prepareReduxWrapper(initialState?: RootState) {
  const store = configureStore(initialState);
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store as any}>{children}</Provider>;
  };
  return [wrapper, store] as const;
}

export default prepareReduxWrapper;
