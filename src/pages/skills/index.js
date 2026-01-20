import React, { Component } from "react";
import "./style.css";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";

import { Helmet } from "react-helmet";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/project_particle.js";
import Particles from "react-particles-js";
import Techstack from "../../components/TechStack";
import Toolset from "../../components/Toolset";

class About extends Component {
 

  render() {
    return (
      <Container className="SP-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skills & Projects | Mitkumar Patel</title>
          <link rel="canonical" href="http://mit510.github.io/home" />
          <meta
            name="description"
            content="Mitkumar Patel | Skills - Web Developer Learner  portfolio react designer coder"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container>
            <Row className="SP-main">
              <HamburgerMenu />
              <div className="skills-projects">
                <section className="skills">
                  <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                  </h1>
                  <Techstack />
                </section>
                <section className="tools">
                  <h1 className="project-heading">
                    <strong className="purple">Tools </strong>I use
                  </h1>
                  <Toolset />
                </section>
              </div>
            </Row>
          </Container>
          <Row className="SP-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default About;
