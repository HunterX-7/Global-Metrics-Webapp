import countryReducer from '../redux/countryReducer';

describe('Testing countryReducer', () => {
  test('The test should returns default state when unknown action type is passed', () => {
    const initialState = [];
    const action = {
      type: 'UNKNOWN_ACTION',
    };
    const newState = countryReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  test('Test initial state of countryReducer', () => {
    const state = countryReducer(undefined, {});
    expect(state).toEqual([]);
  });
});
