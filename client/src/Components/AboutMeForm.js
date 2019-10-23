import React from 'react';
import { Grid } from 'gymnast'
import MediaQuery  from 'react-responsive';
let me = require('./Images/me.jpg');
let SmokingPencil = require('./Images/SmokingPencil.jpg');

class AboutMeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
          <MediaQuery query='(min-width: 1224px)'>           
          <Grid marginLeft={2} marginRight={2} marginTop={0}>
                  <Grid size={4} >
                    <div style={{padding: "10px", paddingLeft: "20px"}}>
                      <img src={me} width={300} height={400} />
                      <img src={SmokingPencil} width={300} height={400} />
                    </div>
                  </Grid>
                  <Grid size={8}>
                  <div style={{textAlign: "left", paddingleft: "10px"}}>
                    <h3>Hi, my name is Slina</h3>
                    <br></br>
                      <p>
                      I am an artist studying B.A. Illustration at Sheridan College in Oakville, Ontario. By attending college, I hope to acquire the skills necessary for producing a versatile range of work for others.<br></br>
                      <br></br>My current personal illustration work focuses on quirky ink drawings and incorporating digital mediums. My digital skills within the Adobe CC are practiced in Photoshop, Illustrator, and Premiere Pro.<br></br>
                      <br></br>I take pride in making others happy, which is why creating portraits of any kind for other people is my favourite thing to do. 
                      </p> <br></br>

                      <label ><b>Education</b></label> <br></br>
                      <p>Taking visual arts courses throughout all my years of highschool helped me discover that my strengths and passions resided within art. Art was not the focus of my school and the budget was strict, but the guidance and support I was given from my instructors was all I really needed.<br></br>
                    <br></br>Before illustration, I received my certificate for the one-year Art Fundamentals program at Sheridan in 2018-2019. This previous education has given me much practice in 2D and 3D design, colour theory, and observational drawings and paintings.
                    </p> <br></br>

                    <label > <b>Exhibitions</b></label>
                          <p>▢&nbsp;&nbsp;&nbsp;&nbsp;Jan 2017 &nbsp;&nbsp; Studio 229, Grade 12 Art Exhibition, Gallery Stratford </p>
                          <p>▢&nbsp;&nbsp;&nbsp;&nbsp;Dec 2017 &nbsp;&nbsp; Selected: 2017 Annual Juried Show, Gallery Stratford </p>
                          <p>▢&nbsp;&nbsp;&nbsp;&nbsp;Jan 2018 &nbsp;&nbsp; Thirty - One, Grade 12 Art Exhibition, Gallery Stratford </p>
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
                          <p>▢&nbsp;&nbsp;&nbsp;&nbsp;Jan 2017	&nbsp;&nbsp; Studio 229, Grade 12 Art Exhibition, Gallery Stratford </p>
                          <p>▢&nbsp;&nbsp;&nbsp;&nbsp;Dec 2017	&nbsp;&nbsp; Selected: 2017 Annual Juried Show, Gallery Stratford </p>
                          <p>▢&nbsp;&nbsp;&nbsp;&nbsp;Jan 2018	&nbsp;&nbsp; Thirty - One, Grade 12 Art Exhibition, Gallery Stratford </p>
                    </div>
                    <img src={SmokingPencil} width={250} height={350} />
            </MediaQuery>
        </div>
    );
  }
}

export default AboutMeForm;