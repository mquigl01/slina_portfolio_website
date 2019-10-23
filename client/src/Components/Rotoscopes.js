import React from 'react';
import MediaQuery  from 'react-responsive';
import { ImageGroup, Image } from 'react-fullscreen-image';
import { Player } from 'video-react';
let Dance = require('./Rotoscopes/Dance.mp4');
let Dance_Thumbnail = require('./Rotoscopes/Dance_Thumbnail.png');

let Experimental = require('./Rotoscopes/Experimental.mp4');
let Experimental_Thumbnail = require('./Rotoscopes/Experimental_Thumbnail.png');

let Dreams = require('./Rotoscopes/Dream.mp4');
let Dream_Thumbnail = require('./Rotoscopes/Dream_Thumbnail.png');

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
          <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
          <div style={{padding: "20px", margin: "60px", marginTop: "10px", marginBottom: "20px"}}>
          <Player
            playsInline
            poster={Dance_Thumbnail}
            src={Dance}
          /> <br></br>

          <Player
            playsInline
            poster={Experimental_Thumbnail}
            src={Experimental}
          /><br></br>

          <Player
            playsInline
            poster={Dream_Thumbnail}
            src={Dreams}
          />
          </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
          <h3 >
            Rotoscopes
          </h3>
          <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
          <div style={{padding: "20px", margin: "300px", marginTop: "10px", marginBottom: "20px"}}>
          <Player
            playsInline
            poster={Dance_Thumbnail}
            src={Dance}
          /> <br></br>

          <Player
            playsInline
            poster={Experimental_Thumbnail}
            src={Experimental}
          /><br></br>

          <Player
            playsInline
            poster={Dream_Thumbnail}
            src={Dreams}
          />
          </div>
        </MediaQuery> 
    </div>
    );
  }
}

export default Rotoscopes;
