import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import { Helmet } from 'react-helmet';



function Home() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Mitkumar Patel</title>
        <link rel="canonical" href="http://mit510.github.io/home" />
        <meta name="description" content="Mitkumar Patel | Home" />
      </Helmet>
      <Container className="App-header" fluid={true}>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles
            params={particles}
            className="particle" 
          />
          <Row className="App-main">
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>
            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
          </Row>
          <Row className="App-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    </div>
  );
}

export default Home;
