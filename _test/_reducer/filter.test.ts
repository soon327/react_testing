import filter, { filterActions } from '../../src/_reducer/filter';

describe('todos reducer', () => {
  it('has initial state', () => {
    expect(filter(undefined, { type: '@@INIT' })).toBe('ALL');
  });
  it('handles applyFilter', () => {
    expect(filter('ALL', filterActions.applyFilter('DONE'))).toBe('DONE');
  });
});
