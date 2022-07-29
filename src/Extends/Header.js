// SITE LOGO
import React, { Component, useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import sitelogo from '../Assets/logo-main.png';

import menu from '../Assets/menu.png';

import { Navbar, Nav, Container, NavDropdown, Form, Button, Row, Col } from 'react-bootstrap';
import $ from 'jquery'
import { Link, NavLink } from "react-router-dom";
import Section from './Switch.js'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

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
            
              <div className='join-discord'>
            <marquee direction="up">
              <h5><span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              </h5>
              </marquee>
            </div>
            <div className='main-overlay-body'>
              <div className='menu-logo'>
              <img src={sitelogo} />
              </div>
              
              <Offcanvas.Header closeButton>
        <div className='secondary-login'>
            <ul>
              <li>
                <Link as="link" to="/">connect wallet</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='inner-menu'>
        <Nav >
          <Nav.Link exact='true' href={'#home'} onClick={handleClose}>Home</Nav.Link>
                <Nav.Link exact='true' href={'#lore'} onClick={handleClose}>land scale</Nav.Link>
                <Nav.Link exact='true' href={'#road'} onClick={handleClose}>jump in</Nav.Link>
                <Nav.Link exact='true' href={'#team'} onClick={handleClose}>docs</Nav.Link>
                <Nav.Link exact='true' href={'#faq'} onClick={handleClose}>blog</Nav.Link>            
          </Nav>
          <ul className='overlay-icons'>
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
        </div>
        </Offcanvas.Body>
        </div>
              <div className='join-discord discord-rgt'>
            <marquee direction="up">
              <h5><span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span>  
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              <span>join us</span> 
              <a href="#">
              <FontAwesomeIcon icon={brands('discord')} />
              </a>
              </h5>
              </marquee>
            </div>
        
      </Offcanvas>

      </Container>
      </div>
     
     
    );
  }
  
  export default Header;
  