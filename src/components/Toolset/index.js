import React from "react";
import "./style.css";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import { DiGit, DiGithubBadge } from "react-icons/di";
import { SiPostman, SiBitbucket, SiJira } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";

/* Reusable Tool Icon */
const ToolIcon = ({ children, label, className }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
  >
    <Col xs={4} md={2} className={`tech-icons ${className}`}>
      {children}
    </Col>
  </OverlayTrigger>
);

export default function Toolset() {
  return (
    <Fade bottom cascade>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <ToolIcon label="Git" className="git">
          <DiGit />
        </ToolIcon>

        <ToolIcon label="GitHub" className="github">
          <DiGithubBadge />
        </ToolIcon>

        <ToolIcon label="Bitbucket" className="bitbucket">
          <SiBitbucket />
        </ToolIcon>

        <ToolIcon label="Postman" className="postman">
          <SiPostman />
        </ToolIcon>

        <ToolIcon label="Jira" className="jira">
          <SiJira />
        </ToolIcon>

        <ToolIcon label="Visual Studio Code" className="vscode">
          <BiLogoVisualStudio />
        </ToolIcon>

        <ToolIcon label="Figma" className="figma">
          <FiFigma />
        </ToolIcon>
      </Row>
    </Fade>
  );
}
