import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Loading/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
  );
}
