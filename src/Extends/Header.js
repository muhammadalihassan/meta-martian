// SITE LOGO
import React, { Component, useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import sitelogo from '../Assets/logo-main.png';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown, FormControl } from 'react-bootstrap';
import $ from 'jquery'
import { Link, NavLink } from "react-router-dom";
import Section from './Switch.js'
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
          {/* <div className='top-header'>
            <ul>
              <li>
                <a href='#'>
                   <FontAwesomeIcon icon={brands('twitter')} />
                </a>
              </li>
              <li>
                <a href='#'>
                   <FontAwesomeIcon icon={brands('discord')} />
                </a>
              </li>
            </ul>
          </div> */}
         <Navbar expand="lg" variant="dark" >
         <Navbar.Brand href={'#home'} onClick={() => {document.getElementById("close-button").click()}} className='mob-view'>
            <div className='logo-main'>
          <img src={sitelogo} alt='' className='bimg-3'/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} id="close-button" htmlFor="nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
          <Nav.Link exact='true' href={'#home'} onClick={() => {document.getElementById("close-button").click()}}>Home</Nav.Link>
                <Nav.Link exact='true' href={'#lore'} onClick={() => {document.getElementById("close-button").click()}}>lore</Nav.Link>
                <Nav.Link exact='true' href={'#road'} onClick={() => {document.getElementById("close-button").click()}}>roadmap</Nav.Link>
                <Navbar.Brand href={'#home'} onClick={() => {document.getElementById("close-button").click()}} className='des-view'>
            <div className='logo-main'>
          <img src={sitelogo} alt='' className='bimg-3'/>
          </div>
        </Navbar.Brand>
                
                <Nav.Link exact='true' href={'#team'} onClick={() => {document.getElementById("close-button").click()}}>team</Nav.Link>
                <Nav.Link exact='true' href={'#faq'} onClick={() => {document.getElementById("close-button").click()}}>FAQ's</Nav.Link>
                <Link to="/" className='wht-btn' onClick={() => {document.getElementById("close-button").click()}}>connect to wallet</Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
      </div>
     
     
    );
  }
  
  export default Header;
  