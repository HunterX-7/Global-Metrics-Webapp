import store from '../redux/configureStore';

describe('Testing initial state of store', () => {
  test('The test should create the store succesfully', () => {
    expect(store.getState()).toEqual({
      countries: [],
    });
  });
});
