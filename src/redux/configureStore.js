import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countryReducer';

const rootReducer = {
  countries: countryReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
