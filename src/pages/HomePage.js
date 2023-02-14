import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getCountryApi } from '../redux/countryReducer';
import store from '../redux/configureStore';
import HomeList from '../components/HomeList';

let reload = false;
const HomePage = () => {
  const [info, setInfo] = useState('');
  const list = useSelector((state) => state.countries);

  useEffect(() => {
    if (!reload) {
      store.dispatch(getCountryApi());
      reload = true;
    }
  }, []);

  const onChange = (e) => {
    setInfo(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Global Metrics</h1>
        <form>
          <input
            type="search"
            onChange={onChange}
            placeholder="Search"
          />
        </form>
      </div>

      <HomeList
        data={list.filter((country) => (
          info.toLowerCase() === '' ? country : country.name.toLowerCase().includes(info)
        ))}
      />
    </div>
  );
};

export default HomePage;
