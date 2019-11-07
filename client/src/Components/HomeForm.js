import React from 'react';
import MediaQuery  from 'react-responsive';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class HomeForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
        < div style={{margin: "20px", marginTop: "10px", marginBottom: "10px"}}>
            <Carousel useKeyboardArrows={true} swipeable={true} className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Billie.jpg" alt="Billie" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Mikko.jpg" alt="Mikko" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Personal/PandaFam.jpg" alt="PandaFam"  /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Design/Cats.png" alt="Cats"  /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Design/Melt.jpg" alt="Melt" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Jen.png" alt="Jen" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Design/Album.png" alt="Album" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Observational/FigureSeated.png" alt="FigureSeated" /></div>
            </Carousel>
            </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
        <div className="tabContent">
        < div style={{margin: "200px", marginTop: "20px", marginBottom: "20px"}}>
             <Carousel className="carousel-style" showThumbs={true} infiniteLoop={true} showStatus={false} autoPlay={true} centerMode={true}>
             <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Billie.jpg" alt="Billie" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Mikko.jpg" alt="Mikko" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Personal/PandaFam.jpg" alt="PandaFam"  /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Design/Cats.png" alt="Cats"  /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Design/Melt.jpg" alt="Melt" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Jen.png" alt="Jen" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Design/Album.png" alt="Album" /></div>
               <div className="slider-item-div"><img src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Observational/FigureSeated.png" alt="FigureSeated" /></div>
            </Carousel>
          </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;