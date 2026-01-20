import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Project from "../pages/projects";

function RouteTracker() {
  const location = useLocation();
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/c47125b6-3f95-4729-8178-79134b9839a4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'nav/index.js:RouteTracker',message:'Route change detected',data:{pathname:location.pathname,search:location.search,hash:location.hash,fullPath:location.pathname+location.search+location.hash},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D'})}).catch(()=>{});
  }, [location]);
  // #endregion agent log
  return null;
}

export default function Nav() {
  // Only use basename in production builds, not in development
  // In dev, process.env.PUBLIC_URL is typically empty, which is correct
  // In production build, it will be set to the homepage path
  const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : undefined;
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/c47125b6-3f95-4729-8178-79134b9839a4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'nav/index.js:Nav',message:'Router setup - basename check',data:{basename:basename,publicUrl:process.env.PUBLIC_URL,nodeEnv:process.env.NODE_ENV,windowPathname:window.location.pathname,expectedBasename:basename||''},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A,D'})}).catch(()=>{});
  }, []);
  // #endregion agent log
  
  return (
    <Router basename={basename}>
      <RouteTracker />
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
