import React, { Component } from "react";
import "../cv_left_content/style.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import resume from "../../assets/img/Mitkumar_Patel.pdf";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

class CLC extends Component {
  render() {
    return (
      <Bounce>
        <div className="clc_main">
          <div className="clc_container">
            <Fade top cascade>
              <h1 className="clc_header">About Me</h1>
            </Fade>

            <ColoredLine color="#FFC466" />

            <Fade top cascade>
              <div className="about-details">
                <p>
                  Hi <span>&#128075;</span>
                  <br />
                  I'm <b>Mitkumar Patel</b>, a Software Developer.
                </p>

                <p>
                  I am a <b>Software Developer</b> with experience building and
                  supporting scalable, database-driven applications for business
                  stakeholders.
                </p>

                <p>
                  My background includes working with Python, SQL, REST APIs,
                  and full-stack web technologies to deliver reliable solutions
                  across the Software Development Life Cycle (SDLC), from design
                  and development to deployment and support.
                </p>

                <p>
                  I have hands-on experience collaborating in Agile,
                  cross-functional environments, troubleshooting production
                  issues, and translating business requirements into technical
                  solutions.
                </p>

                <p className="finalText">
                  Outside of coding, I enjoy traveling and following cricket.
                </p>
              </div>

              <div className="resume-container">
                <p className="resume-heading">
                  Open to full-time Software Developer opportunities.
                </p>

                <a
                  style={{ textDecoration: "none" }}
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="resume-download">
                    <Button variant="primary" className="resume-btn">
                      RESUME
                    </Button>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </Bounce>
    );
  }
}

export default CLC;
