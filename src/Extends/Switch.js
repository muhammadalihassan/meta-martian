import React from 'react';
import { render } from 'react-dom';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className="section-switch">
                <ul>
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={10}></Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={10}></Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={10}></Link></li>
                  <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={10}></Link></li>
                  <li><Link activeClass="active" className="test4" to="test5" spy={true} smooth={true} duration={10}></Link></li>
                  <li><Link activeClass="active" className="test5" to="test6" spy={true} smooth={true} duration={10}></Link></li>
                </ul>
      </div> 
    );
  }
};

render(<Section />, document.getElementById('root'));

export default Section;

