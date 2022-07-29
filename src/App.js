import React, {useState, Component} from 'react';
import op1 from './Assets/op1.png';
import op2 from './Assets/op2.png';
import exp from './Assets/experience.png';
import globe from './Assets/globe.png';
import mars1 from './Assets/mars1.png';
import mars2 from './Assets/mars2.png';
import why from './Assets/why.png';
import liquidity from './Assets/liquidity.png';
import creators from './Assets/creators.png';
import p1 from './Assets/p1.png';
import p2 from './Assets/p2.png';
import p3 from './Assets/p3.png';
import apps from './Assets/apps.png';
import apple from './Assets/apple.png';
import google from './Assets/google.png';
import oculus from './Assets/oculus.png';
import path from './Assets/scene.gltf';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Accordion, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import ReactFancyBox from 'react-fancybox';
import FancyVideo from 'react-videojs-fancybox';
// AOS
// import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 

import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// AOS.init({
//       offset: 200,
//       duration: 1000,
//       easing: 'ease-in-sine',
//       delay: 1000,
// });
AOS.init(
  {delay: 500,
    // duration: 500,
  }
);
function App() {
  const modelPath =
  "./Assets/scene2.gltf";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      arrows: false
  };

  const partners = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      arrows: false
  };


 

  return (
    
    <section className='main'>
      <Container>
        <div className='banner-sec'>
          <div className='banner-heading'>
            <h2>
              meta
            </h2>
            <div className='globe-img'>
            <img src={globe} />
            </div>
            {/* <div>
              <GLTFModel src={modelPath}>
                <AmbientLight color={0xffffff} />
                <DirectionLight
                  color={0xffffff}
                  position={{ x: 100, y: 200, z: 100 }}
                />
                <DirectionLight
                  color={0xff00ff}
                  position={{ x: -100, y: 200, z: -100 }}
                />
              </GLTFModel>
            </div> */}
            <h2 className='sub-h'>martian</h2>
          </div>
        </div>
        </Container>
        <div className='all-right-container'>
        <Container fluid>
          <Row>
            <Col md={10}>
            <div className='options'>
            <h6>1-4</h6>
            <h4 >FROM FLAT 2D APPS TO <span>IMMERSIVE 3D EXPERIENCES</span></h4>
            <Row className='mt-4'>
              <Col md={4}>
                <div className='opt-txt'>
                  <p>MetaMartian makes it easy to bring a spatial dimension 
to popular digital experiences, including everything 
from intimate 3D chat conversations and meetups 
to immersive photo galleries and viewing parties.</p>
<Link as="link" to="/" className='standard-btn'>
              join community
            </Link>
                </div>
              </Col>
              <Col md={8}>
                <div class="opt-img" data-aos="fade-left">
                  <img src={op1} />
                </div>
              </Col>
            </Row>
            
          </div>
            </Col>
          </Row>
        
        </Container>
        </div>
        <div className='all-right-container'>
        <Container fluid>
          <Row>
            <Col md={10}>
            <div className='options'>
            <h6>2-4</h6>
            <h4 >HIGH-FIDELITY INTERACTION</h4>
            <Row className='mt-4'>
              <Col md={4}>
                <div className='opt-txt'>
                  <p>MetaMartian makes it easy to bring a spatial dimension 
to popular digital experiences, including everything 
from intimate 3D chat conversations and meetups 
to immersive photo galleries and viewing parties.</p>
<Link as="link" to="/" className='standard-btn'>
              join community
            </Link>
                </div>
              </Col>
              <Col md={8}>
                <div class="opt-img" data-aos="fade-left">
                  <img src={op2} />
                </div>
              </Col>
            </Row>
            
          </div>
            </Col>
          </Row>
        
        </Container>
        </div>
        <div className='all-right-container'>
        <Container fluid>
          <Row>
            <Col md={10}>
            <div className='options'>
            <h6>3-4</h6>
            <h4 >SPATIAL AUDIO CONVERSATIONS</h4>
            <Row className='mt-4'>
              <Col md={4}>
                <div className='opt-txt'>
                  <p>MetaMartian makes it easy to bring a spatial dimension 
to popular digital experiences, including everything 
from intimate 3D chat conversations and meetups 
to immersive photo galleries and viewing parties.</p>
<Link as="link" to="/" className='standard-btn'>
              join community
            </Link>
                </div>
              </Col>
              <Col md={8}>
                <div class="opt-img" data-aos="fade-left">
                  <img src={op2} />
                </div>
              </Col>
            </Row>
            
          </div>
            </Col>
          </Row>
        
        </Container>
        </div>
        <div className='all-right-container'>
        <Container fluid>
          <Row>
            <Col md={10}>
            <div className='options'>
            <h6>4-4</h6>
            <h4 >OPEN & OWNABLE ECOSYSTEM</h4>
            <Row className='mt-4'>
              <Col md={4}>
                <div className='opt-txt'>
                  <p>We’re building Stageverse together with our community
 to be interoperable with other metaverses, and offering
 ownership opportunites via NFTs for Land, Spaces, Avatars and more.</p>
<Link as="link" to="/" className='standard-btn'>
              join community
            </Link>
                </div>
              </Col>
              <Col md={8}>
                <div class="opt-img" data-aos="fade-left">
                  <img src={op2} />
                </div>
              </Col>
            </Row>
            
          </div>
            </Col>
          </Row>
        
        </Container>
        </div>
        <div className='experience-sec'>
          <Container>
            <div className='experience-head'>
              <h5>experience</h5>
              <p>Connect with friends, experience different 
cultures and lifestyles, create NFT items, 
Start a business and explore the universe.</p>
</div>
<div className='exp-vid-main'>
<Slider {...settings}>
      <div className='exp-video'>
        <FancyVideo
          source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          poster={exp}
          id={"sintel"}
         />
         <div className='exp-txt'>

          <h5>VIRTUAL EXPERIENCE</h5>
          <p>Enter a new world <span>
that is intricately linked to reality</span>
</p>
        </div>
      </div>
      <div className='exp-video'>
        <FancyVideo
          source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          poster={exp}
          id={"sintel2"}
         />
         <div className='exp-txt'>

          <h5>VIRTUAL EXPERIENCE</h5>
          <p>Enter a new world <span>
that is intricately linked to reality</span>
</p>
        </div>
      </div>
      <div className='exp-video'>
        <FancyVideo
          source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          poster={exp}
          id={"sintel3"}
         />
         <div className='exp-txt'>

          <h5>VIRTUAL EXPERIENCE</h5>
          <p>Enter a new world <span>
that is intricately linked to reality</span>
</p>
        </div>
      </div>
</Slider>
</div>

            
          </Container>
        </div>
        <div className='explore-mars'>
          <Container>
            <div className='explore-head'>
              <h4>explore the mars</h4>
              <p>Join thousands of users hosting virtual galleries and events in beautiful artist-built spaces</p>
            </div>
            <div className='explore-gal-main'>
              <Row>
                <Col md={6}>
                  <div className='explore-gal'>
                    <img src={mars1} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='explore-gal'>
                    <img src={mars1} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='explore-gal'>
                    <img src={mars2} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='explore-gal'>
                    <img src={mars2} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='explore-gal'>
                    <img src={mars2} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='explore-gal'>
                    <img src={mars2} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='explore-gal'>
                    <img src={mars2} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='explore-gal'>
                    <img src={mars2} />
                    <div className='explore-gal-text'>
                      <Link as="link" to="/">visit</Link>
                      <div>
                        <h5>OpenSea's<span>Juneteenth Gallery</span></h5>
                        <p>by Swopes</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='why-sec'>
          <Container>
            <Row>
              <Col md={6}>
              <div className='options'>
              <h4 >why meta martian?</h4>
                  <p>$martian is our main utility token that allows you to
buy and sell LANDS and ASSETS in The martian metaverse.</p>
<Link as="link" to="/" className='standard-btn'>
              buy
            </Link>
                </div>
              </Col>
              <Col md={6}>
                <div className='why-img' data-aos="fade-left">
                  <img src={why} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='why-sec'>
          <Container>
            <Row>
            <Col md={6}>
                <div className='why-img' data-aos="fade-right">
                  <img src={liquidity} />
                </div>
              </Col>
              <Col md={6}>
              <div className='options'>
              <h4 >Liquidity mining</h4>
                  <p>The martians is a virtual Metaverse where players 
can play, build, own, and monetize their 
virtual experiences. You can also invest your 
crypto currency and earn more COINS</p>
<Link as="link" to="/" className='standard-btn'>
              sign in
            </Link>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        <div className='benefits-sec'>
          <Container>
          <div className='options'>
            <h6>benefits</h6>
            <h4 >WE'RE BUILDING A BETTER 
<span>WAY TO BE TOGETHER ONLINE</span></h4>
            <Row className='mt-4'>
              <Col md={8}>
                <div className='opt-txt'>
                  <p>Meta Martian is a metaverse platform that makes it easy for creators, 
communities and brands to launch their own unique 3D spaces 
and share immersive social experiences.</p>
                </div>
              </Col>
            </Row>
            
          </div>
          </Container>
        </div>
        <div className='creators-sec'>
          <Container>
            <div className='options'>
            <h4 >Creators are the Heart of <span>Our Metaverse</span></h4>
            </div>
            <div className='creators-img'>
              <img src={creators} />
              <div className='creators-txt'>
                <Link as="link" to="/">apply now</Link>
              </div>
            </div>
          </Container>
        </div>
        <div className='about sec'>
          <Container>
            <div className='about-div'>
              <div className='options'>
              <h4>
                about <span>meta martian</span>
              </h4>
              </div>
              <Col md={8}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
y. Lorem Ipsum has been the industry's standard dummy text ever since the 15
00s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five century
es, but also the leap into electronic typesetting, remaining essential
ly unchanged. It was popularised in the 1960s with the relea
se of Letraset sheets containing Lorem Ipsum passages, and mor
e recently with desktop publishing software like A
ldus PageMaker including versions of Lorem Ipsum.</p>
              </Col>
            </div>
            <div className='partners-div'>
              <h6>partnering with</h6>
              <div className='partner-slider'>
              <Slider {...partners}>
                <div className='partners-img'>
                  <img src={p1} />
                </div>
                <div className='partners-img'>
                  <img src={p2} />
                </div>
                <div className='partners-img'>
                  <img src={p3} />
                </div>
                <div className='partners-img'>
                  <img src={p1} />
                </div>
                <div className='partners-img'>
                  <img src={p2} />
                </div>
                <div className='partners-img'>
                  <img src={p3} />
                </div>                
              </Slider>
              </div>
            </div>
          </Container>
        </div>
        <div className='try-sec'>
          <Container>
            <div className='try-text'>
              <h6>Try Spatial for Free</h6>
              <p>Seamlessly Connect From Any Platform</p>
              <Link as="link" to="/" className='try-a'>
              TRY FOR FREE
              </Link>
              <span>or</span>
              <div className="apps-img">
                <ul>
                  <li>
                    <a href='#'>
                      <img src={oculus} />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={google} />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={apple} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
    </section >
  );
}

export default App;
