import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://restcountries.com/v3.1/all';
const GET_COUNTRY = 'GET_COUNTRY';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_COUNTRY}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

const getCountryApi = createAsyncThunk(GET_COUNTRY, () => axios.get(API_URL).then((resp) => {
  const countryData = (resp.data).map((country) => (
    {
      name: country.name.common,
      population: country.population,
      flag: country.flags.svg,
      id: uuidv4(),
    }
  ));
  return countryData;
}));

export { getCountryApi };
export default countryReducer;
