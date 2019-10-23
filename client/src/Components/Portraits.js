import React from 'react';
import MediaQuery  from 'react-responsive';
import { ImageGroup, Image } from 'react-fullscreen-image'
let Panda = require('./Portraits/Panda.jpg');
let Portrait = require('./Portraits/Portrait.jpg');
let Billie = require('./Portraits/Billie.jpg');
let Sisters = require('./Portraits/Sisters.jpg');
let Mikko = require('./Portraits/Mikko.jpg');
let Cayla = require('./Portraits/Cayla.jpg');
let Julia = require('./Portraits/Julia.jpg');


let Bre = require('./Portraits/Bre.jpg');
let Cat = require('./Portraits/Cat.jpg');
let DarkThoughts = require('./Portraits/DarkThoughts.jpg');
let Mackenzie = require('./Portraits/Mackenzie.jpg');
let Dog = require('./Portraits/Dog.jpg');
let Jen = require('./Portraits/Jen.png');
let Peyton = require('./Portraits/Peyton.jpg');
let Trevor = require('./Portraits/Trevor.jpg');

const images = [
    Panda,
    Portrait, 
    Billie, 
    Jen,
    Sisters, 
    Mikko, 
    Cayla, 
    Julia,
    Bre,
    Cat,
    Peyton,
    Trevor,
    DarkThoughts,
    Mackenzie,
    Dog
]

class Portraits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
          <h3 >
            Portraits
          </h3>
          <div style={{padding: "20px", margin: "60px", marginTop: "10px"}}>
          <ImageGroup>
            <ul className="images">
              {images.map(i => (
                <li key={i}>
                  <Image style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }} 
                  src={i} 
                  alt="portraits" />
                </li>
              ))}
            </ul>
          </ImageGroup>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
          <h3 >
            Portraits
          </h3>
          <div style={{margin: "200px", marginTop: "20px", marginBottom: "20px", paddingTop: "20px"}}>
          <ImageGroup>
            <ul className="images">
              {images.map(i => (
                <li key={i}>
                  <Image style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }} 
                  src={i} 
                  alt="portraits" />
                </li>
              ))}
            </ul>
          </ImageGroup>
          </div>
        </MediaQuery> 
    </div>
    );
  }
}

export default Portraits;
