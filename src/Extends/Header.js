// SITE LOGO
import React, { Component, useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import sitelogo from '../Assets/logo-main.png';
import home from '../Assets/home.png';
import create from '../Assets/create.png';
import menu from '../Assets/menu.png';
import land from '../Assets/land.png';
import map from '../Assets/map.png';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown, FormControl } from 'react-bootstrap';
import $ from 'jquery'
import { Link, NavLink } from "react-router-dom";
import Section from './Switch.js'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Marquee from "react-fast-marquee";

function Header() {
  const [expanded, setExpanded] = useState(false);


  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };


        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        let [hideVideo, setHideVideo] = useState(0);
        function playVid() {
          var vid = document.getElementById("myVideo");
            vid.play();
            var element = document.getElementById("play-btn");
           element.classList.add("mystyle");
        }
    return (
     
      <div className='main-header header-section'>
         <Container>
            <div className='logo-main'>
            <Link to="/"><img src={sitelogo} alt='' className='bimg-3'/></Link>
          </div>
          <div className='main-navigation'>
          <Button onClick={handleShow}>
            <img src={menu} />
      </Button>
<div className='secondary-nav-main'>
<div className='secondary-nav'>
  <ul>
    <li>
      <Link as="link" to="/">community</Link>
    </li>
    <li>
      <Link as="link" to="/">pricing</Link>
    </li>
    <li>
      <Link as="link" to="/">support</Link>
    </li>
    <li>
      <Link as="link" to="/">NFTs</Link>
    </li>
    <li>
      <Link as="link" to="/">about us</Link>
    </li>
  </ul>
</div>
<div className='secondary-login'>
  <ul>
    <li>
      <Link as="link" to="/">whitepaper</Link>
    </li>
    <li>
      <Link as="link" to="/">LOGIN</Link>
    </li>
  </ul>
</div>
</div>
      
          </div>
        
          <Offcanvas show={show} onHide={handleClose} className="main-overlay-menu">
            <div className='left-discord-marquee'>
<Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='inner-menu'>
        <Nav >
          <Nav.Link exact='true' href={'#home'} onClick={() => {document.getElementById("close-button").click()}}>Home</Nav.Link>
                <Nav.Link exact='true' href={'#lore'} onClick={() => {document.getElementById("close-button").click()}}>land scale</Nav.Link>
                <Nav.Link exact='true' href={'#road'} onClick={() => {document.getElementById("close-button").click()}}>jump in</Nav.Link>
                <Nav.Link exact='true' href={'#team'} onClick={() => {document.getElementById("close-button").click()}}>docs</Nav.Link>
                <Nav.Link exact='true' href={'#faq'} onClick={() => {document.getElementById("close-button").click()}}>blog</Nav.Link>            
          </Nav>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
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
      </Container>
      </div>
     
     
    );
  }
  
  export default Header;
  