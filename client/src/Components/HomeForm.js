import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
let Panda = require('./Images/Panda.jpg');
let Mikko = require('./Images/Mikko.jpg');
let Julia = require('./Images/Julia.jpg');
let Shoes = require('./Images/Shoes.jpg');

class HomeForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
            <Carousel useKeyboardArrows={true} swipeable={true} className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
               <div className="slider-item-div"><img src={Panda} alt="Panda" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Mikko} alt="Mikko" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Julia} alt="Julia" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Shoes} alt="Shoes" width={350} height={250} /></div>
            </Carousel>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
        <div className="tabContent">
             <Carousel className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
               <div className="slider-item-div"><img src={Panda} alt="Panda" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Mikko} alt="Mikko" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Julia} alt="Julia" width={350} height={250} /></div>
               <div className="slider-item-div"><img src={Shoes} alt="Shoes" width={450} height={350} /></div>
            </Carousel>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;