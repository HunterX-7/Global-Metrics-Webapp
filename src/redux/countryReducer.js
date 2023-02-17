import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { API_URL, GET_COUNTRY } from './constants';

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
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      area: country.area,
      maps: country.maps.googleMaps,
      timezones: country.timezones,
      continents: country.continents,
      population: country.population,
      flag: country.flags.svg,
      flagDescription: country.flags.alt,
      coatOfArms: country.coatOfArms.svg,
      id: uuidv4(),
    }
  ));
  return countryData;
}));

export { getCountryApi };
export default countryReducer;
