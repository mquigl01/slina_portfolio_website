import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
let Billie = require('./Portraits/Billie.jpg');
let Mikko = require('./Portraits/Mikko.jpg');
let Jen = require('./Portraits/Jen.png');
let PandaFam = require('./Personal/PandaFam.jpg');
let Cats = require('./Design/Cats.png');
let Melt = require('./Design/Melt.jpg');
let Album = require('./Design/Album.png');
let FigureSeated = require('./Observational/FigureSeated.png');

class HomeForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
        < div style={{margin: "20px", marginTop: "10px", marginBottom: "10px"}}>
            <Carousel useKeyboardArrows={true} swipeable={true} className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
               <div className="slider-item-div"><img src={Billie} alt="Billie" /></div>
               <div className="slider-item-div"><img src={Mikko} alt="Mikko" /></div>
               <div className="slider-item-div"><img src={PandaFam} alt="PandaFam"  /></div>
               <div className="slider-item-div"><img src={Cats} alt="Cats"  /></div>
               <div className="slider-item-div"><img src={Melt} alt="Melt" /></div>
               <div className="slider-item-div"><img src={Jen} alt="Jen" /></div>
               <div className="slider-item-div"><img src={Album} alt="Album" /></div>
               <div className="slider-item-div"><img src={FigureSeated} alt="FigureSeated" /></div>
            </Carousel>
            </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
        <div className="tabContent">
        < div style={{margin: "200px", marginTop: "20px", marginBottom: "20px"}}>
             <Carousel className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
             <div className="slider-item-div"><img src={Billie} alt="Billie" /></div>
               <div className="slider-item-div"><img src={Mikko} alt="Mikko" /></div>
               <div className="slider-item-div"><img src={PandaFam} alt="PandaFam"  /></div>
               <div className="slider-item-div"><img src={Cats} alt="Cats"  /></div>
               <div className="slider-item-div"><img src={Melt} alt="Melt" /></div>
               <div className="slider-item-div"><img src={Jen} alt="Jen" /></div>
               <div className="slider-item-div"><img src={Album} alt="Album" /></div>
               <div className="slider-item-div"><img src={FigureSeated} alt="FigureSeated" /></div>
            </Carousel>
          </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;