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
  // #region agent log
  React.useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/c47125b6-3f95-4729-8178-79134b9839a4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'pages/home/index.js:Home',message:'Home component rendered',data:{currentPath:window.location.pathname,currentUrl:window.location.href},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  }, []);
  // #endregion agent log

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Mitkumar Patel</title>
        <link rel="canonical" href="https://mit510.github.io/portfolio_website" />
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
