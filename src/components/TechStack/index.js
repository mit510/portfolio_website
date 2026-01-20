import React from "react";
import "./style.css";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import {
  DiReact,
  DiNodejs,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiJava,
} from "react-icons/di";

import {
  SiExpress,
  SiMongodb,
  SiPython,
  SiGithub,
  SiMicrosoftazure,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

const TechIcon = ({ children, label, className }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
  >
    <Col xs={4} md={2} className={`tech-icons ${className}`}>
      {children}
    </Col>
  </OverlayTrigger>
);

export default function Techstack() {
  return (
    <Fade bottom cascade>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechIcon label="React" className="react">
          <DiReact />
        </TechIcon>

        <TechIcon label="JavaScript" className="js">
          <IoLogoJavascript />
        </TechIcon>

        <TechIcon label="HTML5" className="html">
          <DiHtml5 />
        </TechIcon>

        <TechIcon label="CSS3" className="css">
          <DiCss3 />
        </TechIcon>

        <TechIcon label="Tailwind CSS" className="tailwind">
          <BiLogoTailwindCss />
        </TechIcon>

        <TechIcon label="Node.js" className="node">
          <DiNodejs />
        </TechIcon>

        <TechIcon label="Express.js" className="express">
          <SiExpress />
        </TechIcon>

        <TechIcon label="MySQL" className="mysql">
          <DiMysql />
        </TechIcon>

        <TechIcon label="MongoDB" className="mongodb">
          <SiMongodb />
        </TechIcon>

        <TechIcon label="Python" className="python">
          <SiPython />
        </TechIcon>

        <TechIcon label="Java (Basic)" className="java">
          <DiJava />
        </TechIcon>

        <TechIcon label="GitHub" className="github">
          <SiGithub />
        </TechIcon>
{/* 
        <TechIcon label="Microsoft Azure" className="azure">
          <SiMicrosoftazure />
        </TechIcon> */}
      </Row>
    </Fade>
  );
}
