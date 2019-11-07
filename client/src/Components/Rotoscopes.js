import React from 'react';
import MediaQuery  from 'react-responsive';
import { Player } from 'video-react';

class Rotoscopes extends React.Component {
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
            poster="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dance_Thumbnail.png"
            src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dance.mp4"
          /> <br></br>

          <Player
            playsInline
            poster="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Experimental_Thumbnail.png"
            src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Experimental.mp4"
          /><br></br>

          <Player
            playsInline
            poster="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dream_Thumbnail.png"
            src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dream.mp4"
          />
          </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
          <h3 >
            Rotoscopes
          </h3>
          <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
          <div style={{padding: "20px", margin: "300px", marginTop: "10px", marginBottom: "20px"}}>
          <Player
            playsInline
            poster="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dance_Thumbnail.png"
            src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dance.mp4"
          /> <br></br>

          <Player
            playsInline
            poster="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Experimental_Thumbnail.png"
            src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Experimental.mp4"
          /><br></br>

          <Player
            playsInline
            poster="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dream_Thumbnail.png"
            src="https://slinafrichitthavongwebsite.s3.ca-central-1.amazonaws.com/Rotoscopes/Dream.mp4"
          />
          </div>
        </MediaQuery> 
    </div>
    );
  }
}

export default Rotoscopes;
