import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import ContactLeft from '../../components/contact_left';
import EmailForm from '../../components/email_form';
import {Helmet} from 'react-helmet';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Mitkumar Patel</title>
          <link rel="canonical" href="https://mit510.github.io/portfolio_website" />
          <meta
            name="description"
            content="Mitkumar Patel | Contact - Web Developer | Learner "
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
              <Col xl={6} className="Contact-left">
                <ContactLeft />
              </Col>
              <Col xl={6} className="Contact-right">
                <EmailForm />
              </Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>
      </div>
    );
  }
} export default Contact