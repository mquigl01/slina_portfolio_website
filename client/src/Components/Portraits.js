import React from 'react';
import MediaQuery  from 'react-responsive';
import { ImageGroup, Image } from 'react-fullscreen-image'

const images = [
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Panda.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Portrait.jpg", 
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Billie.jpg", 
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Jen.png",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Sisters.jpg", 
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Mikko.jpg", 
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Cayla.jpg", 
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Julia.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Bre.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Cat.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Peyton.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Trevor.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/DarkThoughts.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Mackenzie.jpg",
    "https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Portraits/Dog.jpg"
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

        <MediaQuery query='(min-width: 1225px)'>
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
