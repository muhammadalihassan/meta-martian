import React, {useState, Component} from 'react';
import story from './Assets/story.jpg';
import t1 from './Assets/john.jpeg';
import t2 from './Assets/kryp.jpg';
import t21 from './Assets/sally1.jpeg';
import t3 from './Assets/flawwed.jpeg';
import t4 from './Assets/chadder.jpeg';
import t5 from './Assets/ap.jpg';
import t6 from './Assets/anibus.jpeg'; 
import t7 from './Assets/farsight.jpeg'; 
import t8 from './Assets/prof.jpg'; 
import lore from './Assets/lore.mp3'
import tomb1 from './Assets/tomb1.png';
import tomb2 from './Assets/tomb2.png';
import tomb3 from './Assets/tomb3.png';
import tomb4 from './Assets/tomb4.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Accordion, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
// AOS
// import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 

import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 1000,
});

function App() {

//   const goToBtm = () => {
//     window.scrollTo({
//         bottom: 0,
//         behavior: "smooth",
//     });
// };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      arrows: false
  };



 

  return (
    
    <section className='main'>
    
    </section >
  );
}

export default App;
