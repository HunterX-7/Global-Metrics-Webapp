import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { getCountryApi } from '../redux/countryReducer';
import store from '../redux/configureStore';
import HomeList from '../components/HomeList';
import logo from '../images/global-network-white.png';

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
      <Navbar fixed="top" key="false" bg="primary" variant="dark" expand="false">
        <Container fluid className="d-flex">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-false"
            aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                <strong>GLOBAL METRICS</strong>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">More</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  onChange={onChange}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

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

          <Form className="d-none d-md-flex">
            <Form.Control
              onChange={onChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
      <div className="container-fluid p-4 landing-bg">
        <div className="row">
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-md-6 col-6">
            <div className="box" />
          </div>
          <div className="col-md-5 col-12">
            <h1 className="display-2 hero-p text-center" style={{ fontWeight: '700' }}>Welcome to Global Metrics</h1>
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-md-6 col-6">
            <div className="box" />
          </div>
          <div className="col-md-5 col-12">
            <h2 className="display-5 hero-p text-center" style={{ fontWeight: '600' }}>
              Current worldwide population is expected to be
              {' '}
              <strong>7,942,645,086</strong>
              !
            </h2>
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-md-11 col-12">
            <h2 className="display-5 hero-p" style={{ fontWeight: '600', fontSize: '36px' }}>STATS BY COUNTRY</h2>
          </div>
        </div>
      </div>
      <Container fluid className="bg-color">
        <Row>
          <HomeList
            data={list.filter((country) => (
              info.toLowerCase() === '' ? country : country.name.toLowerCase().includes(info)
            ))}
          />
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
