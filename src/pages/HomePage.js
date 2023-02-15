import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
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
          <div className="col-md-11 col-12">
            <h1 className="display-2 hero-p" style={{ fontWeight: '700' }}>Welcome to Global Metrics</h1>
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-md-11 col-12">
            <h2 className="display-5 hero-p" style={{ fontWeight: '600' }}>
              Current worldwide population is expected to be
              {' '}
              <strong>7,942,645,086</strong>
              !
            </h2>
          </div>
          <div className="col-12">
            <div className="box" />
          </div>
          <div className="col-md-8 col-12 p-3 rounded bg-primary">
            <p className="hero-p">
              The projected world population on Jan. 1, 2023, was
              {' '}
              <strong>7,942,645,086</strong>
              , an increase of
              {' '}
              <strong>73,772,634</strong>
              , or
              {' '}
              <strong>0.94%</strong>
              , from New Year&apos;s Day 2022. During past January 2023, 4.3 births
              and 2.0 deaths were expected worldwide every 1 second.
            </p>
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
            <h2 className="display-5 hero-p" style={{ fontWeight: '600', fontSize: '40px' }}>STATS BY COUNTRY</h2>
          </div>
        </div>
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
