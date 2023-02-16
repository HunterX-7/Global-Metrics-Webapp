import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DetailCard = (props) => {
  const { name, capital, flag } = props;

  return (
    <Col className="my-3 d-flex justify-content-center" xs={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem' }} className="shadow-lg bg-color2">
        <Link to={`country/${name}`}>
          <Card.Img className="p-2" variant="top" src={flag} alt={name} />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <Card.Title className="text-center" style={{ fontWeight: '600', fontSize: '24px' }}>{name}</Card.Title>
          <Card.Subtitle className="text-center" style={{ fontWeight: '500' }}>
            {capital}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DetailCard;

DetailCard.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.arrayOf(string),
  flag: PropTypes.string.isRequired,
};

DetailCard.defaultProps = {
  capital: [],
};
