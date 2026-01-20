import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;

      {/* GitHub */}
      <a
        href="https://github.com/mit510"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>

      {/* Email */}
      <a
        href="mailto:patelmit5102@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <FontAwesomeIcon className="insta" icon={faEnvelope} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mit510"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
