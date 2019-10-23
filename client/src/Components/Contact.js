import React from 'react';
import MediaQuery  from 'react-responsive';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };

    this.changeFirstname = this.changeFirstname.bind(this);
    this.changeLastname = this.changeLastname.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeFirstname(e) {
    this.setState({firstname: e.target.value});
  }
  changeLastname(e) {
    this.setState({lastname: e.target.value});
  }
  changeEmail(e) {
    this.setState({email: e.target.value});
  }
  changeMessage(e) {
    this.setState({message: e.target.value});
  }

  submitForm(e) {
    let myJSON = {};
    myJSON.firstname = this.state.firstname;
    myJSON.lastname = this.state.lastname;
    myJSON.email = this.state.email;
    myJSON.message = this.state.message;
    console.log(myJSON);
  }

  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
        <h3>Contact Me</h3><br></br><br></br>
                <div>
                    <label>First Name:</label><br></br>
                    <input onChange={this.changeFirstname} type="text"id="fname"name="firstname"placeholder="Your name.." value={this.state.firstname}/><br></br><br></br>

                    <label>Last Name:</label><br></br>
                    <input onChange={this.changeLastname} type="text"id="lname" name="lastname" placeholder="Your last name.." value={this.state.lastname} /><br></br><br></br>


                    <label>Email:</label><br></br>
                    <input onChange={this.changeEmail} type="text" id="email"name="email"placeholder="Your email" value={this.state.email}/><br></br><br></br>


                    <label>Message:</label><br></br>
                    <textarea onChange={this.changeMessage} id="subject"name="subject"placeholder="Write something.." value={this.state.message}></textarea><br></br><br></br>
                    <button onClick={this.submitForm} >Submit</button>
                </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
        <div className="tabContent">
            <h3>Contact Me</h3><br></br> <br></br>
            <div>
            <label>First Name:</label><br></br>
                    <input onChange={this.changeFirstname} type="text"id="fname"name="firstname"placeholder="Your name.." value={this.state.firstname}/><br></br><br></br>

                    <label>Last Name:</label><br></br>
                    <input onChange={this.changeLastname} type="text"id="lname" name="lastname" placeholder="Your last name.." value={this.state.lastname} /><br></br><br></br>


                    <label>Email:</label><br></br>
                    <input onChange={this.changeEmail} type="text" id="email"name="email"placeholder="Your email" value={this.state.email}/><br></br><br></br>


                    <label>Message:</label><br></br>
                    <textarea onChange={this.changeMessage} id="subject"name="subject"placeholder="Write something.." value={this.state.message}></textarea><br></br><br></br>
                    <button onClick={this.submitForm} >Submit</button>
                </div>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default Contact;