import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
let Panda = require('./Images/Panda.jpg');
let Portrait = require('./Images/Portrait.jpg');
let Wedding = require('./Images/Wedding.jpg');
let Shoes = require('./Images/Shoes.jpg');

const Portfolio = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/Portfolio'); window.location.reload(); }}
    style={{paddingBottom: "20px", border: "none"}}
  >
    My Portfolio
  </button>
));

const About = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/AboutMe'); window.location.reload(); }}
    style={{paddingBottom: "20px", border: "none"}}
  >
    About Me
  </button>
));

class HomeForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
            <br></br>
            <Portfolio />
             <br></br>
             <About />
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
        <div className="tabContent">
            <br></br>
            <Portfolio />
             <br></br>
             <About />
             <br></br>
             <Carousel className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
               <div className="slider-item-div"><img src={Panda} alt="Panda" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Portrait} alt="Panda" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Wedding} alt="Panda" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Shoes} alt="Panda" width={350} height={250} /></div>
            </Carousel>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;