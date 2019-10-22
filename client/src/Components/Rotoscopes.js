import React from 'react';
import MediaQuery  from 'react-responsive';
import { ImageGroup, Image } from 'react-fullscreen-image';

const images = [
];


class Rotoscopes extends React.Component {
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
            Rotoscopes
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
                  alt="rotoscopes" />
                </li>
              ))}
            </ul>
          </ImageGroup>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
          <h3 >
            Rotoscopes
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
                  alt="rotoscopes" />
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

export default Rotoscopes;
