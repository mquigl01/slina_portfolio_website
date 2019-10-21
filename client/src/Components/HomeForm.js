import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';

const Portfolio = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/Portfolio'); window.location.reload(); }}
    style={{paddingBottom: "20px", fontWeight: "bolder", border: "none"}}
  >
    My Portfolio
  </button>
));

const About = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/AboutMe'); window.location.reload(); }}
    style={{paddingBottom: "20px", fontWeight: "bolder", border: "none"}}
  >
    About Me
  </button>
));

class HomeForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3> <br></br>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
              To view my portfolion click:
            </p>
            <Portfolio />
             <br></br>

             <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
              To learn more about me see:
            </p><About />
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1224px)'>
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3> <br></br>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
              To view my portfolio see:
            </p><Portfolio />
             <br></br>

             <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
              To learn more about me see:
            </p><About />
             <br></br>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;