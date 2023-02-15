import PropTypes, { shape } from 'prop-types';
import DetailCard from './DetailCard';

const HomeList = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((country) => {
        const {
          id, name, population, flag,
        } = country;

        return (
          <DetailCard
            key={id}
            name={name}
            population={population}
            flag={flag}
          />
        );
      })}
    </div>
  );
};

export default HomeList;

HomeList.propTypes = {
  data: PropTypes.arrayOf(shape).isRequired,
};
