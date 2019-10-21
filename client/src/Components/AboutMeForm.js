import React from 'react';
import { Grid } from 'gymnast'
import MediaQuery  from 'react-responsive';
let myDescription = require("./MyText/AboutMe_MyDescription");
let me = require('./Images/me.jpg');

class AboutMeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
          <h3 className="title" >About Me</h3>
          <br></br>

          <MediaQuery query='(min-width: 1224px)'>           
              <Grid marginLeft={20} marginRight={20} marginTop={0}>
                  <Grid size={5} >
                  <img src={me} width={350} height={250} />
                  </Grid>
                  <Grid size={6}>
                    <p>{myDescription.Text}</p>
                  </Grid>
              </Grid>
            </MediaQuery>

            <MediaQuery query='(max-width: 1224px)'>
                  <p>{myDescription.Text}</p>
                  <img src={me} width={250} height={150} />
            </MediaQuery>
        </div>
    );
  }
}

export default AboutMeForm;