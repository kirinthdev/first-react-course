import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./styles/Home.css";
import logo from '../images/btc_image.svg';
import confLogo from '../images/clouds-logo.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={logo}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Badge Management System</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={confLogo}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}