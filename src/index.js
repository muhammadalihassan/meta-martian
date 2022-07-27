import React, { Component, useState } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Extends/Header';
import Footer from './Extends/Footer';
import reportWebVitals from './reportWebVitals';
import About from "./Views/About/Index";
import video from './Assets/bg.m4v';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import $ from "jquery";
// class Hello extends Component {
//   componentDidMount() {
//     $(".click-span").click(function(){
//       var a = $(this).closest(".inner-road").find(".road-card");
//       var c = $(this).closest(".inner-road").find(".bat");
//       var vid = document.getElementById("myAudio");
//       if($(this).hasClass("active")){
//           $(this).removeClass("active");
//           a.hide();
//           c.removeClass("up");
//           vid.pause();
//         c.fadeIn();
//         console.log("hello 2");
//         return false;
//       } else{
//         console.log("bye 1");
//           $(this).addClass("active");
//           a.show();
//           c.addClass("up");
//           vid.play();
//           setTimeout(function() { 
//             c.fadeOut(); 
//         }, 6000);
//       }
//     })
//       $("body").ready(function(){
//         var b = $(".road-card").hide();
        
    
//       })
      
   
//   }
//   render() {
//     return (
//       <div className="App">
//         {/* <h1>jquery in React App</h1>
//         <button>Click Me</button> */}
//       </div>
//     );
//   }
// }
ReactDOM.render(
  <BrowserRouter basename="/">
      <div className='bg-video'>

<video loop autoplay="" muted>
  <source src={video} type="video/mp4" />
</video>
</div>
  <div className='overlay' ontouchstart={() => {document.getElementById("close-button").click()}} onscroll={() => {document.getElementById("close-button").click()}}>
  <div class="icon-bar">
  <a href="https://twitter.com/KillerClubhouse" class="twitter" target='_blank'> <FontAwesomeIcon icon={brands('twitter')} /></a> 
  <a href="https://discord.gg/rfU3S7b2se" class="discord" target='_blank'><FontAwesomeIcon icon={brands('discord')} /></a> 
</div>
  <header className='pageheader'>
      <Header />
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
    </Routes>
    {/* <Hello /> */}
    <footer>
      <Footer />
    </footer>
  </div>
  
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
