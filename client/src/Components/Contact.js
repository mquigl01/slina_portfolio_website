import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
        <h3>Contact Me</h3><br></br><br></br>
                <div>
                    <label>First Name:</label><br></br>
                    <input type="text"id="fname"name="firstname"placeholder="Your name.."/><br></br><br></br>

                    <label>Last Name:</label><br></br>
                    <input type="text"id="lname" name="lastname" placeholder="Your last name.."/><br></br><br></br>


                    <label>Email:</label><br></br>
                    <input type="text" id="email"name="email"placeholder="Your email"/><br></br><br></br>


                    <label>Message:</label><br></br>
                    <textarea id="subject"name="subject"placeholder="Write something.."></textarea><br></br><br></br>
                    <button onClick={this.submitMessage} >Submit</button>
                </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
        <div className="tabContent">
            <h3>Contact Me</h3><br></br> <br></br>
            <div>
                    <label>First Name:</label><br></br>
                    <input type="text"id="fname"name="firstname"placeholder="Your name.."/> <br></br><br></br>

                    <label>Last Name:</label><br></br>
                    <input type="text"id="lname" name="lastname" placeholder="Your last name.."/><br></br><br></br>


                    <label>Email:</label><br></br>
                    <input type="text" id="email" name="email" placeholder="Your email"/><br></br><br></br>


                    <label>Message:</label><br></br>
                    <textarea id="subject" name="subject"placeholder="Write something.."></textarea><br></br><br></br>

                    <button onClick={this.submitMessage} >Submit</button>
                </div>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default Contact;