import React, { Component } from "react";
import "../loading/style.css";
// import { Link } from "react-bootstrap/lib/Navbar";
import { Navigate} from "react-router-dom";
import { Helmet } from "react-helmet";
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    console.log(this.state.redirect);
    this.id = setTimeout(() => this.setState({ redirect: true }), 2000);
    console.log(this.state.redirect);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
    console.log(this.state.redirect);
   
  }

  render() {
    console.log(this.state.redirect);
    return this.state.redirect ? (
      <Navigate to="/home" > </Navigate>
    ) : (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mitkumar Patel</title>
          <link rel="canonical" href="https://mit510.github.io/portfolio_website/home" />
          <meta
            name="description"
            content="Mitkumar Patel | Home - Web Developer | Learner "
          />
        </Helmet>
        <div className="Loading-header">
          <PuffLoader size={"40vw"} color={"#fff"} loading={true} />
        </div>
      </div>
    );
  }
}

export default Loading;
