import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';

describe('Test page deployment', () => {
  const country1 = [
    {
      name: 'MockCountry1',
      capital: 'MockCapital1',
      region: 'MockRegion1',
      subregion: 'MockSubregion1',
      area: 'MockArea1',
      maps: 'www.google.com/maps/mockcountry1',
      timezones: 'UTC1',
      continents: 'Continent1',
      population: 1000000001,
      flag: 'www.mockflag.com/1',
      flagDescription: 'Mock flag description 1',
      coatOfArms: 'www.mockcoatofarms.com/1',
      id: 12341,
    },
  ];

  test('DetailCard test 1 component matches snapshot', () => {
    const tree = render(
      <HashRouter>
        <Provider store={store}>
          <DetailCard
            name={country1.name}
            capital={country1.capital}
            flag={country1.flag}
          />
        </Provider>
      </HashRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  const country2 = [
    {
      name: 'MockCountry2',
      capital: 'MockCapital2',
      region: 'MockRegion2',
      subregion: 'MockSubregion2',
      area: 'MockArea2',
      maps: 'www.google.com/maps/mockcountry2',
      timezones: 'UTC2',
      continents: 'Continent2',
      population: 1000000002,
      flag: 'www.mockflag.com/2',
      flagDescription: 'Mock flag description 2',
      coatOfArms: 'www.mockcoatofarms.com/2',
      id: 12342,
    },
  ];

  test('DetailCard test 2 component matches snapshot', () => {
    const tree = render(
      <HashRouter>
        <Provider store={store}>
          <DetailCard
            name={country2.name}
            capital={country2.capital}
            flag={country2.flag}
          />
        </Provider>
      </HashRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
