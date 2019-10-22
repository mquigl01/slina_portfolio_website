import React from 'react';
import { Grid } from 'gymnast'
import MediaQuery  from 'react-responsive';
let myDescription = require("./MyText/AboutMe_MyDescription");
let me = require('./Images/me.jpg');
let SmokingPencil = require('./Images/SmokingPencil.jpg');

class AboutMeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
          <MediaQuery query='(min-width: 1224px)'>           
          <Grid marginLeft={20} marginRight={20} marginTop={0}>
                  <Grid size={5} >
                    <div style={{paddingTop: "10px"}}>
                      <img src={me} width={360} height={500} />
                    </div>
                  </Grid>
                  <Grid size={6}>
                  <h3 className="title" ><b>Hi, my name is Slina</b></h3>
                  <br></br>
                    <p>
                    I am an artist studying B.A. Illustration at Sheridan College in Oakville, Ontario. By attending college, I hope to acquire the skills necessary for producing a versatile range of work for others.<br></br>
                    <br></br>My current personal illustration work focuses on quirky ink drawings and incorporating digital mediums. My digital skills within the Adobe CC are practiced in Photoshop, Illustrator, and Premiere Pro.<br></br>
                    <br></br>I take pride in making others happy, which is why creating portraits of any kind for other people is my favourite thing to do. 
                    </p>
                  </Grid>
              </Grid>
              <br></br>
              <div style={{textAlign: "center"}} >
                <label ><b>Education</b></label> <br></br>
                    <p>Taking visual arts courses throughout all my years of highschool helped me discover that my strengths and passions resided within art. Art was not the focus of my school and the budget was strict, but the guidance and support I was given from my instructors was all I really needed.<br></br>
                    <br></br>Before illustration, I received my certificate for the one-year Art Fundamentals program at Sheridan in 2018-2019. This previous education has given me much practice in 2D and 3D design, colour theory, and observational drawings and paintings.
                    </p>
                </div>
                <br></br>
                <Grid marginLeft={10} marginRight={15} marginTop={0}>
                  <Grid size={3} >
                  <img src={SmokingPencil} width={250} height={350} />
                  </Grid>
                  <Grid size={9}>
                    <div style={{textAlign: "center"}} >
                      <label > <b>Exhibitions</b></label>
                        <ul>
                          <li>Jan 2017	Studio 229, Grade 12 Art Exhibition, Gallery Stratford </li><br></br>
                          <li>Dec 2017	Selected: 2017 Annual Juried Show, Gallery Stratford </li><br></br>
                          <li>Jan 2018	Thirty - One, Grade 12 Art Exhibition, Gallery Stratford </li><br></br>
                        </ul>
                    </div>
                    </Grid>
              </Grid>
            </MediaQuery>

            <MediaQuery query='(max-width: 1224px)'>
                  <h3 className="title" ><b>Hi, my name is Slina</b></h3>
                <br></br>
                  <p>
                    I am an artist studying B.A. Illustration at Sheridan College in Oakville, Ontario. By attending college, I hope to acquire the skills necessary for producing a versatile range of work for others.<br></br>
                    <br></br>My current personal illustration work focuses on quirky ink drawings and incorporating digital mediums. My digital skills within the Adobe CC are practiced in Photoshop, Illustrator, and Premiere Pro.<br></br>
                    <br></br>I take pride in making others happy, which is why creating portraits of any kind for other people is my favourite thing to do. 
                    </p>
                  <img src={me} width={250} height={350} />
                  <br></br>
              <div style={{textAlign: "center"}} >
                <label ><b>Education</b></label> <br></br>
                    <p>Taking visual arts courses throughout all my years of highschool helped me discover that my strengths and passions resided within art. Art was not the focus of my school and the budget was strict, but the guidance and support I was given from my instructors was all I really needed.<br></br>
                    <br></br>Before illustration, I received my certificate for the one-year Art Fundamentals program at Sheridan in 2018-2019. This previous education has given me much practice in 2D and 3D design, colour theory, and observational drawings and paintings.
                    </p>
                </div>
                <br>
                </br>
                <div style={{textAlign: "center"}} >
                      <label > <b>Exhibitions</b></label>
                        <ul>
                          <li>Jan 2017	Studio 229, Grade 12 Art Exhibition, Gallery Stratford </li><br></br>
                          <li>Dec 2017	Selected: 2017 Annual Juried Show, Gallery Stratford </li><br></br>
                          <li>Jan 2018	Thirty - One, Grade 12 Art Exhibition, Gallery Stratford </li><br></br>
                        </ul>
                    </div>
                    <img src={SmokingPencil} width={250} height={350} />
            </MediaQuery>
        </div>
    );
  }
}

export default AboutMeForm;