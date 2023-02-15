import PropTypes, { shape } from 'prop-types';
import DetailCard from './DetailCard';

const HomeList = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((country) => {
        const {
          id, name, capital, flag,
        } = country;

        return (
          <DetailCard
            key={id}
            name={name}
            capital={capital}
            flag={flag}
          />
        );
      })}
    </>
  );
};

export default HomeList;

HomeList.propTypes = {
  data: PropTypes.arrayOf(shape).isRequired,
};
