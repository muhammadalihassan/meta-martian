import sitelogo from '../Assets/logo-main.png';
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap";

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
      <Container>
      <div className="footer-top">
        <img src={sitelogo} />
        <Nav >
          <Nav.Link exact='true' href={'#home'}>Home</Nav.Link>
                <Nav.Link exact='true' href={'#story'} >story</Nav.Link>
                <Nav.Link exact='true' href={'#road'} >roadmap</Nav.Link>
                <Nav.Link exact='true' href={'#team'} >team</Nav.Link>
                <Nav.Link exact='true' href={'#faq'} >FAQ's</Nav.Link>
                {/* as={Link} to={'/'} */}
          </Nav>
      </div>
      <div className='footer-btm'>
      <p><FontAwesomeIcon icon={solid('envelope')} /> <a href='mailto:inquiry@killerclubhouse.io'>inquiry@killerclubhouse.io</a></p>
        <p>© 2022 Killer Club House. All Rights Reserved</p>
        {/* <ul>
              <li>
                <a href='https://twitter.com/KillerClubhouse' className='twt' target='_blank'>
                   <FontAwesomeIcon icon={solid('angles-up')} />
                </a>
              </li>
              <li>
                <a href='https://discord.gg/X5TjRtkg' className='twi' target='_blank'>
                   <FontAwesomeIcon icon={brands('discord')} />
                </a>
              </li>
        </ul> */}
      </div>
      </Container>
      <ScrollToTop />
    </div>
  );
}

export default Footer;
