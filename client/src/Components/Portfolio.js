import React from 'react';
import MediaQuery  from 'react-responsive';
import Gallery from 'react-photo-gallery';
let Panda = require('./Images/Panda.jpg');
let Portrait = require('./Images/Portrait.jpg');
let Wedding = require('./Images/Wedding.jpg');
let Shoes = require('./Images/Shoes.jpg');

const IMAGES = [
    {
      src: Panda,
      width: 4,
      height: 4,
      alt: "Panda"
    }, 
    {
      src: Portrait,
      width: 4,
      height: 4,
      alt: "Family Portrait"
    }, 
    {
      src: Wedding,
      width: 4,
      height: 6,
      alt: "Wedding Portrait"
    },
    {
      src: Shoes,
      width: 4,
      height: 4,
      alt: "Shoes Sketch"
    }
];


class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div className="tabContent">
        <MediaQuery query='(max-width: 1224px)'>
          <h3 >
            Portfolio
          </h3>
          <div style={{padding: "20px"}}>
            <Gallery photos={IMAGES}/>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
          <h3 >
            Portfolio
          </h3>
          <div style={{padding: "20px"}}>
            <Gallery photos={IMAGES}/>
          </div>
        </MediaQuery> 
    </div>
    );
  }
}

export default Portfolio;
