import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../images/global-network-white.png';

const DetailPage = () => {
  const { name } = useParams();
  const country = useSelector(
    (state) => state.countries.find((theCountry) => theCountry.name === name),
  );

  return (
    <>
      <Navbar key="false" bg="primary" variant="dark" expand="false">
        <Container fluid className="d-flex">
          <Link to="/">
            <MdOutlineArrowBackIosNew style={{ color: 'white', fontSize: '24px' }} />
          </Link>

          <Navbar.Brand className="d-inline-block justify-content-center" href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block justify-content-center"
              alt="Global Metrics logo"
            />
            {' '}
            <strong>GLOBAL METRICS</strong>
          </Navbar.Brand>

        </Container>
      </Navbar>

      <Container fluid className="p-3 bg-color" style={{ minHeight: '100vh' }}>
        <Row>
          <Col className="d-grid align-content-center" xs={12} lg={5} xl={4}>
            <Figure>
              <Figure.Image
                alt={country.name}
                src={country.flag}
              />
              <Figure.Caption className="text-center text-light">
                Flag of
                {' '}
                {country.name}
                .
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} lg={7} xl={8}>
            <Card
              style={{ border: 0 }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: '600' }}>{`${country.name}`}</Card.Title>
                <Table striped bordered hover variant="primary">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{country.name}</td>
                    </tr>
                    <tr>
                      <td>Capital</td>
                      <td>{country.capital}</td>
                    </tr>
                    <tr>
                      <td>Region</td>
                      <td>{country.region}</td>
                    </tr>
                    <tr>
                      <td>Subregion</td>
                      <td>{country.subregion}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {country.area.toLocaleString()}
                        {' '}
                        km²
                      </td>
                    </tr>
                    <tr>
                      <td>Timezones</td>
                      <td>{country.timezones}</td>
                    </tr>
                    <tr>
                      <td>Continents</td>
                      <td>{country.continents}</td>
                    </tr>
                    <tr>
                      <td>Population</td>
                      <td>{country.population.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td>Flag</td>
                      <td>
                        <img src={country.flag} alt="Flag" width="100" height="auto" />
                      </td>
                    </tr>
                    <tr>
                      <td>Flag Description</td>
                      <td>{country.flagDescription}</td>
                    </tr>
                    <tr>
                      <td>Coat of Arms</td>
                      <td>
                        <img src={country.coatOfArms} alt="Coat of Arms" width="100" height="auto" />
                      </td>
                    </tr>
                    <tr>
                      <td>Google maps</td>
                      <td>
                        Check location in google maps
                        {' '}
                        <a target="_blank" rel="noreferrer" href={`${country.maps}`}>
                          {' '}
                          Here
                        </a>
                        .
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
