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

  const [buttonText, setButtonText] = useState('Click to Read');

  // function handleClick() {
  //   if(buttonText.current.classList.contains('collapsed')){
  //     setButtonText('New text');
  //   }
  //   else{
  //     setButtonText('sfsdsd');
  //   }
  // }
  const handleClick = event => {
    if (event.currentTarget.classList.contains('collapsed')) {
     
      setButtonText('Show Less');
    } else {
      setButtonText('Click to Read');
    }
  };

  class AudioButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: false
      };
    }
  
    onPlay = (event) => {
      this.setState({ playing: true });
    };
    onPause = (event) => {
      this.setState({ playing: false });
    };
    onEnded = (event) => {
      this.setState({ playing: false });
    };
  
    playAudio = () => {
      this.audioEl.play();
      const audio = this.audioEl;
      audio.addEventListener("play", this.onPlay);
      audio.addEventListener("pause", this.onPause);
    };
  
    pauseAudio = () => {
      this.audioEl.pause();
    };
  
    startAudio = () => {
      this.playAudio();
    };
  
    renderAudio = () => {
      const { url } = this.props;
      const { playing } = this.state;
      const notSupportedMsg =
        "Your browser does not support the <code>audio</code> element.";
      return (
        <>
          {!playing && (
            <FontAwesomeIcon onClick={this.startAudio} icon={solid('volume-xmark')} />
          )}
          {playing && <FontAwesomeIcon onClick={this.pauseAudio} icon={solid('volume-high')} />}
  
          <audio
            src={lore}
            ref={(ref) => {
              this.audioEl = ref;
            }}
          >
            {notSupportedMsg}
          </audio>
        </>
      );
    };
  
    render() {
      return this.renderAudio();
    }
  }


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

  const ReadMore2 = ({ children }) => {
    const text = children;
    const [isReadMore2, setIsReadMore2] = useState(true);
    const toggleReadMore2 = () => {
      setIsReadMore2(!isReadMore2);
    };
    return (
      <p className="text">
        {isReadMore2 ? text.slice(0, 300) : text}
        <a href='javascript:void(0)' onClick={toggleReadMore2} className="read-or-hide">
          {isReadMore2 ? "...read more" : " show less"}
        </a>
      </p>
    );
  };
    
  const Content2 = () => {
    return (
      
          <ReadMore2>
         By day, the Connors toured the land the village
          folk seemed to fear. Yes, it was indeed rather barren,
           but the surrounding countryside clearly flourished, 
           with no evidence of a spreading plant disease or unchecked
            insect infestation. Not ones to let superstition get the
             best of them and capitalizing on the desperation of 
             the locals, the Connors purchased several farms adjacent
              to the “blasted heath,” and combined them into an impressive
               estate.
               As they had hoped, life proceeded rather peacefully for 
               the Connors. Mr. Connor took to raising livestock and 
               continued to apply the butchering trade as the need in 
               the neighborhood arose. Mrs. Connor was largely occupied 
               with tending to the needs of the family in the country manor,
                as well as its surrounding gardens. Their son was a vibrant 
                dreamer and gravitated to painting them from time-to-time. 
                Their daughter was an avid reader and took to crafting her 
                own fairy tales filled with ancient magic and fantastical 
                creatures. As hoped, the children thrived in rural life, 
                especially with their newfound friendships with kids from 
                nearby farms.   
                Amid the summer of 1895, something unique came to that quiet,
                 secluded slice of Americana. The Connors had heard of traveling
                  circuses and carnivals of course, but nothing of this sort ever 
                  touring this far out from civilization. The carnival pitched
                   its giant tents right in the middle of the “blasted heath,” 
                   still as desolate as when the Connors had first arrived. Despite
                    the lingering memories of the land now hosting the event,
                     the draw of the carnival lights and sounds of the attractions
                      were too much for the locals to resist. Curiously, it was as 
                      if the population of this rural zone had boomed overnight. 
                      There were far too many attendees now flocking to this carnival
                       from every direction. Clearly more than can account for the 
                       small number of families who occupy this remote region. Wherever
                        all these people came from, you couldn’t deny how friendly 
                        they seemed, always inviting and beckoning with big smiles. 
                        The event was strangely free of charge. It was said to be a 
                        celebration of some kind, but no one could pin down the details.
                         There was candy and popcorn and games and wonders alike. It truly
                          was a sight to behold! The Connors, like all their farming 
                          friends around them, joined in the party that night.
                          Never had they seen such wonder! The trinkets and magic! The
                           tastes and smells! The many creatures and performers! 
                           People of all shapes and sizes, colors and creeds, were
                            represented there. Everyone was really into dressing the
                             part. The carnival was like a melting pot of every festival from the height of every empire, selecting only the best 
                             every corner of the globe had to offer and bottling it all 
                             up into one place. What a blessing! What a fine memory for 
                             our children to cherish! The Connors couldn’t help but think. 
                             As the Connors were about to return home, along with the rest 
                             of their pleasantly exhausted neighbors, some of the event masters 
                             handed out souvenirs. They bid everyone a fond farewell and prioritized
                              the young children with their generous gifts. To the Connors’ daughter, 
                              they presented a stuffed teddy bear. One that would usually be quite difficult 
                              to win. The clown who delivered it, carried a large toothy grin that was quite
                               locked in place, his face smeared by a long night of makeup and sweat. Slightly
                                disturbed, but not wanting to appear rude, the Connors graciously accepted 
                                the token and quickly passed by. With the gift received, the daughter gave it 
                                a choking hug and promised then and there to love “Teddy,” forever. When the
                                 Connors finally arrived home, the happiness felt there could heat the whole of it.
                                  They drifted to sleep soundly that night, thinking that life couldn’t possibly 
                                  be better than this… 

                                  The Connors, I’m afraid, did not wake up, at least not in the way we typically understand. Their fate was to be an eternal nightmare from which there can be no peace.
          </ReadMore2>
        
    );
  };
  const Search = () => {
    const [show, setShow] = useState(false);
    return(
      <>
        
        {show && <span>
             Conjured in
               antiquity during that primordial era from heaven knows where. Only half referenced in stone
                age scrawlings of hermit madmen and whispered amongst the oral histories of congregated outcasts
                 and heretics. What blasphemous deals were struck to secure our evolution? What sacrifices were made
                  to separate ourselves from the other primitive primate species and thus nature’s tyrannical 
                  grasp? Whatever the truth may be, we traded one master for the next. One devil we knew for another
                   much worse… The only clues of this history now remain in the relics of this hideous, long-lost past.
                    But they are not telling their secrets, for their essence is more sinister than any expression 
                    of malevolence that has manifested in our human condition. Why should they speak? These… Vessels…
                     have us right where they want us…. Distracted, decadent and divided. Prime livestock in the never-ending
                      harvest of souls. One day, the grand tapestry will reveal itself, the cup filled to the brim with the wailings
                       of the damned. Then the eternal night will descend upon us all!
                       <br /><br />The game the Vessels play is long…. Dramatic calamity will strike during one epoch
                         of time to then disappear in a relative instant, drawing little scrutiny of connectedness.
                          The slow surgical soul-sucking satiate these eldritch snakes for a season. But inevitably
                           they strike again, as is their nature. Their poison savagely spread through the veins of
                            civilization. Each Vessel has a particular way of savoring the delicacy of a human soul,
                             prolonging the agonizing tragedy in the wake of its wrath. To better relish in the cruel
                              irony, they often take the forms of innocent objects normally associated with human 
                              expressions of love, community, honor, harmony and happiness. Cloaked in subterfuge
                               and emersed in the proximity of pain, they feed….<br /><br />
                               How could any of us hope to resist? For whom could possibly know to confront the embodiment
                                 of evil when it is camouflaged in that of a wedding ring? Cursed to bring those who swear vows
                                  upon it, a spirit of infidelity, deception and treachery. Bringing family members to turn on 
                                  one another, inevitably in horrendous violence. Who would have thought that a simple fur pelt,
                                   used to bring warmth and survival, could twist its subjects into hideous demonic beasts, craving 
                                   greed-induced murder of their whole tribe? Who would have guessed that an ancient pyramid, housing
                                    the royal dead, was the voice behind a beckoning call, entrancing disoriented villagers to entomb 
                                    themselves in its deepest burial chambers? How were we to detect corrupted relics at the monastery 
                                    that when used in supplication, sow the seeds of discord, conflagration and rebellion? Who could possibly
                                     fathom a little child’s plaything, a teddy bear possessed, procured at something as innocuous as a 
                                     traveling carnival, corrupting those around it into the most terrifying instruments of perpetual despair?<br /><br />
                                     So many lives were ruined. So many yet to be…<br /><br />
                                     <ul>
                                      <li>Only one thing is for certain.</li>
                                      <li>We are all knocking at Death’s door…</li>
                                      <li>For his is the only home humanity will reside.</li>
                                     </ul>
          </span>}
          <a href="javascript:void(0)" onClick={() => setShow(prev => !prev)}>{!show? "...read more" : " show less"}  </a>
          
      </>
    );
  }
  
 

  return (
    
    <section className='main'>
      <div className='index-main'>
      {/* <ScrollUpButton /> */}
        <Container >
          <div className='banner-main' id="home">
            {/* <h6>welcome to <span>k</span>iller </h6> */}
            <div className="main">
      
    </div>
            <h1 data-aos="fade-down" id="lore"><span>k</span>iller <br /><span>c</span>lub <span>H</span>ouse</h1>
            <p>
            <a href="javascript:void(0)" className='play-audio' ><AudioButton src={lore}>
         </AudioButton></a>There are some things that should be left hidden. That should be ignored and forgotten.
             Left to the sands of time. Buried deep below, to never again bear witness to the celestial skies.
              Some evils are… older… than we can possibly fathom with our feeble faculties. <Search />
            </p>
            
            <a href='#road' className='button-r'>explore the club House</a>
          </div>
          {/* <div className='tomb-sec'>
            <Row>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-right">
                  <img src={tomb1} />
                  <div className='tomb-txt-l'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-right">
                  <img src={tomb3} />
                  <div className='tomb-txt-s'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
              <Col md={4}></Col>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-left">
                  <img src={tomb3} />
                  <div className='tomb-txt-s'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-left">
                  <img src={tomb4} />
                  <div className='tomb-txt-l'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
            </Row>
          </div> */}
          <div className='red-boxes abt-main'>
            <div className='about-txt'>
              <h2 className='big-txt' >about us</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'><b>K</b>iller <b>C</b>lub <b>H</b>ouse about</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
              </div>
              
            </div>
          </div>
          <div className='red-boxes' id="story">
            <div className='story-txt'>
            <h2 className='big-txt' >story</h2>
            <div className='abt-headings'>
            <h3 className='small-txt'>Origin Story</h3>
            </div>
            <Accordion className='story-accord'>
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={handleClick}>{buttonText}</Accordion.Header>
                <Accordion.Body>
               <Row>
                <Col md={12} lg={6} xl={6}>
                <img src={story} />
                </Col>
                <Col md={12} lg={6} xl={6}>
                
              <p>The Connors… Now there is a classically sobering tale.
                 Theirs was a family of relatively humble stock. Mr. Connor
                  was a skilled butcher by trade, while his wife was a 
                  homemaker as was common for married women of the time.
                   Wishing to raise their two young children in a more 
                   traditional manner and after coming into a small inheritance,
                    the family left the city and headed into the countryside. </p>
                    <p>The year was 1892. As the Connor family was searching for a plot 
                      of land to settle, all the locals they talked to seemed anxious to
                       leave. They frequently would bargain downward to try and secure a
                        quick deal, as only the Connors had come looking to buy in God knows
                         how long. In search of their motivations, Mr. Connor gathered a few
                          rumors referencing a “blasted heath” nearby and a cloud of madness 
                          that surrounded the now decade deceased owners. </p>
                </Col>
              </Row>
              <div className='remaining-story-cntnt'>
              {/* <Content2 /> */}
              <p> By day, the Connors toured the land the village
          folk seemed to fear. Yes, it was indeed rather barren,
           but the surrounding countryside clearly flourished, 
           with no evidence of a spreading plant disease or unchecked
            insect infestation. Not ones to let superstition get the
             best of them and capitalizing on the desperation of 
             the locals, the Connors purchased several farms adjacent
              to the “blasted heath,” and combined them into an impressive
               estate.</p>
               <p>As they had hoped, life proceeded rather peacefully for 
               the Connors. Mr. Connor took to raising livestock and 
               continued to apply the butchering trade as the need in 
               the neighborhood arose. Mrs. Connor was largely occupied 
               with tending to the needs of the family in the country manor,
                as well as its surrounding gardens. Their son was a vibrant 
                dreamer and gravitated to painting them from time-to-time. 
                Their daughter was an avid reader and took to crafting her 
                own fairy tales filled with ancient magic and fantastical 
                creatures. As hoped, the children thrived in rural life, 
                especially with their newfound friendships with kids from 
                nearby farms. </p>
               <p> Amid the summer of 1895, something unique came to that quiet,
                 secluded slice of Americana. The Connors had heard of traveling
                  circuses and carnivals of course, but nothing of this sort ever 
                  touring this far out from civilization. The carnival pitched
                   its giant tents right in the middle of the “blasted heath,” 
                   still as desolate as when the Connors had first arrived. Despite
                    the lingering memories of the land now hosting the event,
                     the draw of the carnival lights and sounds of the attractions
                      were too much for the locals to resist. Curiously, it was as 
                      if the population of this rural zone had boomed overnight. 
                      There were far too many attendees now flocking to this carnival
                       from every direction. Clearly more than can account for the 
                       small number of families who occupy this remote region. Wherever
                        all these people came from, you couldn’t deny how friendly 
                        they seemed, always inviting and beckoning with big smiles. 
                        The event was strangely free of charge. It was said to be a 
                        celebration of some kind, but no one could pin down the details.
                         There was candy and popcorn and games and wonders alike. It truly
                          was a sight to behold! The Connors, like all their farming 
                          friends around them, joined in the party that night.</p>
               <p> Never had they seen such wonder! The trinkets and magic! The
                           tastes and smells! The many creatures and performers! 
                           People of all shapes and sizes, colors and creeds, were
                            represented there. Everyone was really into dressing the
                             part. The carnival was like a melting pot of every festival from the height of every empire, selecting only the best 
                             every corner of the globe had to offer and bottling it all 
                             up into one place. What a blessing! What a fine memory for 
                             our children to cherish! The Connors couldn’t help but think. 
                             As the Connors were about to return home, along with the rest 
                             of their pleasantly exhausted neighbors, some of the event masters 
                             handed out souvenirs. They bid everyone a fond farewell and prioritized
                              the young children with their generous gifts. To the Connors’ daughter, 
                              they presented a stuffed teddy bear. One that would usually be quite difficult 
                              to win. The clown who delivered it, carried a large toothy grin that was quite
                               locked in place, his face smeared by a long night of makeup and sweat. Slightly
                                disturbed, but not wanting to appear rude, the Connors graciously accepted 
                                the token and quickly passed by. With the gift received, the daughter gave it 
                                a choking hug and promised then and there to love “Teddy,” forever. When the
                                 Connors finally arrived home, the happiness felt there could heat the whole of it.
                                  They drifted to sleep soundly that night, thinking that life couldn’t possibly 
                                  be better than this… </p>
               <p>The Connors, I’m afraid, did not wake up, at least not in the way we typically understand. Their fate was to be an eternal nightmare from which there can be no peace.</p>
              </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
              
            </div>
          </div>
          <div className='red-boxes' id="road">
            <div className='roadmap-txt'>
              <h2 className='big-txt' >roadmap</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>the killer journey</h3>
              </div>
            </div>
            <div className='road-phases'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Phase 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Phase 2</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Phase 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <ul>
                        <li><b>KCH</b> is full of treats, not tricks. We are here to
                           provide the Cardano Community with horror year-round.
                            We’ve been hard at work for eight months putting together
                             a long-term plan for our community. First, let's go over what
                              you can expect in the near future:</li>
                        <li><span>Socials</span>  Launch Twitter, Website and Discord.</li>
                        <li>
                        <span>Twitter Spaces </span>We initially plan to join already established spaces to introduce ourselves, followed by an AMA.  Eventually, we will host our own spaces as the community grows.
                        </li>
                        <li><span>Community</span>We will be offering many ways to whitelist.<br />Some roles will be based on your interests and activity level. We will also host giveaways, movie nights and trivia</li>
                        <li><span>Marketing</span>
                          As the launch draws near, we will be participating in numerous shows from established Cardano influencers. We will also be sharing sneak peaks.</li>
                        <li><span><b>KCH</b> Rooms</span>
                        What is a project without NFTs? Our collection will be verified and listed on all relevant marketplaces. At this time, a policy ID will also be provided.
                        </li>
                        <li><span>Launch</span>
                        Our mint will feature 5555 unique gut-wrenching NFTs
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ul>
                      <p><b>Coming Soon</b>. </p>
                        {/* <li>Listing the <b>K</b>iller <b>C</b>lub <b>H</b>ouse on the <b>MARKET PLACE</b>. </li>
                        <li>RELEASE <b>STAKING</b> & <b>TOKENOMICS</b>.</li>
                        <li>HOLDERS <b>AIR DROP</b>.</li>
                        
                        <li><b>CNFT-CON BOOTH</b>.</li>
                        <li>SPECIAL <b>HALLOWEEN DROP</b>.</li> */}
                      </ul>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <ul>
                        <p><b>Coming Soon</b>. </p>
                      </ul>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>
          </div>
          <div className='red-boxes' id="team">
            <div className='team-txt'>
              <h2 className='big-txt' >team</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'><b>K</b>iller <b>C</b>lub <b>H</b>ouse team</h3>
              </div>
              <div className='team-sub-h'>
                <h4>FOUNDERS</h4>
              </div>
              <Row>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t1} />
                    <div className='img-txt'>
                      <h6>John Anderson</h6>
                      <ul>
                        <li><p><i>JohnA</i></p></li>
                        <li><p>Lubbock Texas</p></li>
                        <li>
                          <p><b>Twitter:</b> @Johnand94830005</p>
                        </li>
                        <li>
                          <p><b>Discord:</b> Johna#8990</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t2} />
                    <div className='img-txt'>
                    <h6>Richard Cole</h6>
                      <ul>
                      <li><p><i>Kryptock</i></p></li>
                      <li><p>Lubbock Texas</p></li>
                        <li>
                          <p><b>Twitter:</b> @Rcole89</p>
                        </li>
                        <li>
                          <p><b>Discord:</b> Kryptock#0413</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                </Row>
                <div className='team-sub-h'>
                <h4>TEAM</h4>
              </div>
                <Row>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t3} />
                    <div className='img-txt'>
                    <h6>Flawwed1</h6>
                      <ul>
                        <li>
                          <p><b>Main Host / HR / Project Lead / Marketing Strategist</b></p>
                        </li>
                        <li>
                          <p><b>Twitter:</b> @Flawwed1Art</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t4} />
                    <div className='img-txt'>
                    <h6>Ch₳ddervox</h6>
                      <ul>
                        <li>
                          <p><b>Influencer / Co-Host</b></p>
                        </li>
                        <li>
                          <p><b>Twitter:</b> @ChadderVOX</p>
                        </li>
                        <li>
                          <p><b>Discord:</b> CH₳DDERVOX#8627</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t5} />
                    <div className='img-txt'>
                    <h6>AP</h6>
                      <ul>
                        <li>
                          <p><b>Quality Control</b></p>
                        </li>
                        <li>
                          <p><b>Twitter:</b> @ap_cnft</p>
                        </li>
                        <li>
                          <p><b>Discord:</b> AP#2655</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t21} />
                    <div className='img-txt'>
                    <h6>Sallywarrior </h6>
                      <ul>
                        <li>
                          <p><b>Designer / Lead MOD / Lead Shill Army</b></p>
                        </li>
                        <li>
                          <p><b>Twitter:</b> @SarahCole89</p>
                        </li>
                        <li>
                          <p><b>Discord:</b> Sallywarrior#4400</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t6} />
                    <div className='img-txt'>
                    <h6>AnubisJ  </h6>
                      <ul>
                        <li>
                          <p><b>Lead Developer / Artist</b></p>
                        </li>
                        {/* <li>
                          <p><b>Twitter:</b> @AnubisJ</p>
                        </li> */}
                        <li>
                          <p><b>Discord:</b> AnubisJ#6282</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t7} />
                    <div className='img-txt'>
                    <h6>Farsightx</h6>
                      <ul>
                        <li>
                          <p><b>Graphic Designer / Marketing Consultant / Discord Manager</b></p>
                        </li>
                        <li>
                          <p><b>Twitter:</b> @FarsightxNFT</p>
                        </li>
                        <li>
                          <p><b>Discord:</b> farsightx#8352</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t8} />
                    <div className='img-txt'>
                    <h6>Professor Grimwald</h6>
                      <ul>
                        <li>
                          <p><b>Project writer </b></p>
                        </li>
                        <li>
                          <p><b>Twitter:</b> @prof_grimwald</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className='red-boxes' id="faq">
            <div className='faq-txt faq-sec'>
              <h2 className='big-txt' >faq's</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>frequently asked questions</h3>
              </div>
              <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><span>Q1</span><h6>What is <b>K</b>iller <b>C</b>lub <b>H</b>ouse? </h6></Accordion.Header>
    <Accordion.Body>
      <p><b>K</b>iller <b>C</b>lub <b>H</b>ouse is a CNFT experience unlike any other that was created by horror fans for horror fans.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><span>Q2</span><h6>How do I join the <b>K</b>iller <b>C</b>lub <b>H</b>ouse community? 
</h6></Accordion.Header>
    <Accordion.Body>
    <p>Anyone can join the <b>KCH</b> community by following on 
      Twitter or joining Discord. Our most active, engaged,
       and helpful community members will become “family”.
</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><span>Q3</span><h6>What are the benefits of joining <b>K</b>iller <b>C</b>lub <b>H</b>ouse?</h6></Accordion.Header>
    <Accordion.Body>
    <p>A strong community is the backbone of any successful project. The possible benefits of a strong community are endless. Meet people that share your passion for horror and help us build a vibrant, influential and united community. 
</p>   
<p>There will be other more tangible benefits for <b>KCH</b> holders based on the given roles. 
We have an ambitious <a href="#road">Roadmap</a> that provides more detail. 
</p>
 </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><span>Q4</span><h6>Will <b>K</b>iller <b>C</b>lub <b>H</b>ouse be present at CNFT con?  </h6></Accordion.Header>
    <Accordion.Body>
    <p>Yes. Come by our booth and show us your <b>KCH</b> NFT. We may have a surprise for you!</p>    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header><span>Q5</span><h6>How was the artwork created?</h6></Accordion.Header>
    <Accordion.Body>
    <p><b>K</b>iller <b>C</b>lub <b>H</b>ouse rooms are animated 3D NFTs created with manual generation. </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
          </div>
        </Container>
      </div>
    </section >
  );
}

export default App;
