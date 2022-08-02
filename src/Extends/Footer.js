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
import { solid, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

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
<div className='top-ftr'>
  <Container>
    <Row>
      <Col md={3}>
        <div className='ftr-logo'>
          <Link as="link" to="/"><img src={sitelogo} /></Link>
        </div>
      </Col>
      <Col md={3}>
        <div className='ftr-links-main'>
          <ul className='ftr-links'>
            <li>
              <Link as="link" to="/">
                news
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                create
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                market
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                play
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                whitepaper
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col md={3}>
        <div className='ftr-links-main'>
          <ul className='ftr-links'>
            <li>
              <Link as="link" to="/">
                map
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                sand
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                press
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                partners
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                terms of use
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col md={3}>
        <div className='ftr-links-main'>
        <ul className='ftr-social'>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={brands('twitch')} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={brands('instagram')} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={brands('facebook')} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={brands('twitter')} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
            </li>
          </ul>
          <ul className='ftr-links'>
           
            <li>
              <Link as="link" to="/">
                licenses
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                privacy
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                terms
              </Link>
            </li>
            <li>
              <Link as="link" to="/">
                community guidlines
              </Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
</div>
<div className='ftr-btm'>
  <Container>
    <p>2022 Meta martian, inc. ALL right reserved</p>
  </Container>
</div>
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default Footer;
