import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import HomeList from '../components/HomeList';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

describe('Testing page deployment', () => {
  const data1 = [
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

  test('HomeList test 1 component matches snapshot', () => {
    const tree = render(
      <HashRouter>
        <Provider store={store}>
          <HomeList data={data1} />
        </Provider>
      </HashRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  const data2 = [
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

  test('HomeList test 2 component matches snapshot', () => {
    const tree = render(
      <HashRouter>
        <Provider store={store}>
          <HomeList data={data2} />
        </Provider>
      </HashRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
