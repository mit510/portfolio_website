import React, { Component } from "react";
import "../projects/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import { Helmet } from "react-helmet";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/project_particle.js";
import Particles from "react-particles-js";
import ProjectCard from "../../components/project_card";

/* Project Images */
import cricketApp from "../../assets/img/cricket.jpg";
import crimeData from "../../assets/img/weather.jpg";
import ebookStore from "../../assets/img/book.jpg";

class Projects extends Component {
  render() {
    return (
      <Container className="About-header" fluid>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | Mitkumar Patel</title>
          <link rel="canonical" href="https://mit510.github.io" />
          <meta
            name="description"
            content="Mitkumar Patel | Software Developer Projects – React, Node.js, Python, Data Analytics"
          />
        </Helmet>

        <Animate to="1" from="0" attributeName="opacity">
          <Row className="About-main">
            <Particles params={particles} className="particle" />
            <HamburgerMenu />

            <Container className="project-section">
              <h1 className="project-heading">
                My <strong className="purple">Projects</strong>
              </h1>

              <p className="project-sub-heading">
                Here are some of the projects I’ve worked on.
              </p>

              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {/* Cricket Coaching App */}
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={cricketApp}
                    isBlog={false}
                    title="Cricket Coaching App"
                    description="A mobile application built using React Native that enables video annotation and real-time feedback between coaches and players. Backend services were deployed on Azure for authentication, secure media storage, and data handling."
                    ghLink="https://github.com/mit510/Cricket_App"
                  />
                </Col>

                {/* Crime Data Analysis */}
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={crimeData}
                    isBlog={false}
                    title="Crime Data Analysis Platform"
                    description="A data analytics platform developed using Python, Pandas, and Seaborn to analyze Toronto crime data. Includes filtering, trend analysis, and geospatial heatmaps for effective visualization."
                    ghLink="https://github.com/mit510/Crime-Prediction"
                  />
                </Col>

                {/* E-Book Store */}
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={ebookStore}
                    isBlog={false}
                    title="E-Book Store (MERN)"
                    description="A full-stack e-commerce application built with the MERN stack. Features include user authentication, shopping cart, order management, and scalable data storage using MongoDB Atlas."
                    ghLink="https://github.com/mit510/Tatvasoft_Internship"
                  />
                </Col>
              </Row>
            </Container>
          </Row>

          <br />

          <Row className="About-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default Projects;
