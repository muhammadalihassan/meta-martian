import sitelogo from '../Assets/logo-main.png';
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap";
import land from '../Assets/land.png';
import map from '../Assets/map.png';
import home from '../Assets/home.png';
import create from '../Assets/create.png';
import { Link } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import Section from './Switch.js'
import ScrollToTop from './ScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';

// SITE LOGO


function Footer() {


  const [expanded, setExpanded] = useState(false);


  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
  return (
    <div className="main-footer">
      <div className='side-nav-main'>
  <ul>
    <li>
      <a href="javascript:void(0)">
        <img src={home} />
        <span>home</span>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src={create} />
        <span>create</span>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src={land} />
        <span>land</span>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src={map} />
        <span>map</span>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src={create} />
        <span>community</span>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src={map} />
        <span>about us</span>
      </a>
    </li>
  </ul>
</div>
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default Footer;
