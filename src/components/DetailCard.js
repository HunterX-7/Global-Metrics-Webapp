import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailCard = (props) => {
  const { name, population, flag } = props;

  return (
    <>
      <Link to={`details/${name}`}>
        <div>
          <img
            src={flag}
            alt={name}
            width="150"
            height="100"
          />
        </div>
      </Link>
      <h2>{name}</h2>
      <p>{population}</p>
    </>
  );
};

export default DetailCard;

DetailCard.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};
