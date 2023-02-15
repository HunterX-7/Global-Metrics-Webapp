import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const DetailPage = () => {
  const { name } = useParams();
  const country = useSelector(
    (state) => state.countries.find((theCountry) => theCountry.name === name),
  );

  return (
    <div>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <h1>{`${country.name}`}</h1>
    </div>
  );
};

export default DetailPage;
