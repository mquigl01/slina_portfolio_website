import React from 'react';
import './App.css';
import Modal from 'react-modal';
import AboutMeForm from "./Components/AboutMeForm";
import HomeForm from "./Components/HomeForm";
import WorkTermOneBlogForm from "./Components/WorkTermOneBlogForm";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import MediaQuery  from 'react-responsive';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

let history = null;

let myModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    height: '400px',
    width: '900px',
    position: 'fixed',
    alignItems: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

const mobileOptions = {
  backgroundColor: "white",
  color: 'black', 
  textAlign: 'center',
  fontSize: '24px',
  paddingTop: "10px",
  paddingBottom: "10px",
  textDecoration: 'none',
  border: "1px solid grey",
}


const tabStyle = {
  backgroundColor: "white",
  color: 'black', 
  textAlign: 'center',
  height: '50px !important',
  width: '300px !important',
  fontSize: '24px',
  paddingLeft: "80px",
  paddingRight: "80px",
  paddingTop: "20px",
  paddingBottom: "20px",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  textDecoration: 'none',
  border: "1px solid #4F4A41",
  borderBottom: "none",
  margin: "5px",
  marginTop: "40px"
};

const hoverTabStyle = {
  color: 'white', 
  backgroundColor: '#7eb2c4',
  textAlign: 'center',
  paddingLeft: "80px",
  paddingRight: "80px",
  paddingTop: "20px",
  fontSize: '24px',
  paddingBottom: "20px",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  textDecoration: 'none',
  border: "2px solid #4F4A41",
  borderBottom: "4px solid white",
  margin: "5px",
  marginTop: "40px"
};


class App extends React.Component {
  constructor(props) {
    super(props);

    history = createBrowserHistory();

    this.state = {
      title: "",
      date: "",
      description: "",
      username: "",
      password: "",
      hoverHome: false,
      hoverWorkTermOne: false,
      hoverAboutMe: false,
      modalIsOpen: false,
      menuOpen: false,
    };

    this.addPosts = this.addPosts.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.hoverWorkTermOneOn = this.hoverWorkTermOneOn.bind(this);
    this.hoverWorkTermOneOff = this.hoverWorkTermOneOff.bind(this);
    this.hoverAboutMeOn = this.hoverAboutMeOn.bind(this);
    this.hoverAboutMeoff = this.hoverAboutMeoff.bind(this);
    this.selectHome = this.selectHome.bind(this);
    this.selectWorkTermOne = this.selectWorkTermOne.bind(this);
    this.selectAboutMe = this.selectAboutMe.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // Closes the modal that alerts the client they are making an insurance-less client
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateHistory() {
    history = createBrowserHistory();
  }

  async selectHome() {
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverWorkTermOne: false });
    this.setState({ hoverHome: true });
    await history.push("/");
  }

  hoverHomeOn(){
    this.setState({ hoverHome: true });
  }

  hoverHomeOff(){ 
    if(history.location.pathname !== "/") {
      this.setState({ hoverHome: false });
    }
  }

  async selectWorkTermOne(){
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverWorkTermOne: true });
    this.setState({ hoverHome: false });
    await history.push("/WorkTermOne");
  }

  hoverWorkTermOneOn(){
    this.setState({ hoverWorkTermOne: true });
  }

  hoverWorkTermOneOff() { 
    if(history.location.pathname !== "/WorkTermOne") {
      this.setState({ hoverWorkTermOne: false });    
    }
  }

  async selectAboutMe(){
    this.setState({ hoverAboutMe: true });
    this.setState({ hoverWorkTermOne: false });
    this.setState({ hoverHome: false });
    await history.push("/AboutMe");
  }

  hoverAboutMeOn(){
    this.setState({ hoverAboutMe: true });
  }

  hoverAboutMeoff(){ 
    if(history.location.pathname !== "/AboutMe") {
      this.setState({ hoverAboutMe: false });    
    }
  }


  handleStateChange = async(e) => {
    await this.setState({ [e.target.id]: e.target.value });
  }

  validateUser = async(e) => {
    if(this.state.username !== "" && this.state.password !== "") {
      if(this.state.title !== "" && this.state.date !== "" && this.state.description !== "") {
        let response = await checkUser(this.state.username, this.state.password);

        if(response.error === "Verified") {
          console.log("Verified");
          let sendPost = await addPost(this.state.title, this.state.date, this.state.description);
          console.log(sendPost.error);
    
          if(sendPost.error === "Success") {
            this.setState({ modalIsOpen: false });
            this.seePosts();
          }
          else {
            alert('Invalid Login. Please try again.');
          }
        }
        else {
          alert('Invalid Login. Please try again.');
        }
      }
      else {
        alert("Please enter in a title, date and decription for your post.");
      }
    }
    else {
      alert("Please enter your username and password");
    }
  }

  addPosts = (e) => {
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div>
        <MediaQuery query='(min-width: 1224px)'>
          <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={myModalStyle}
                contentLabel="New Post"
              >
                <form>
                  <label>Name:</label> <input type="text"   onChange={this.handleStateChange} id={"username"} value={this.state.username}/> <br></br>
                  <label>Password:</label> <input type="text" onChange={this.handleStateChange} id={"password"} value={this.state.password}/> <br></br>
                  <label>Title:</label> <input type="text" onChange={this.handleStateChange} id={"title"}value={this.state.title}/> <br></br>
                  <label>Date:</label> <input type="date" onChange={this.handleStateChange} id={"date"} value={this.state.date}/> <br></br>
                  <br></br><label>Description:</label><br></br> <textarea rows = "5" cols = "60" className="descriptionBox" type="text" onChange={this.handleStateChange} id={"description"} value={this.state.description}/> <br></br>
                  <button className="cancelButton" onClick={this.closeModal}>Cancel</button> 
                  <button  onClick={this.validateUser} >Save</button>
                  </form>
              </Modal >

        <div style={{backgroundColor: "white"}}>
            <button onClick={this.addPosts} className="AddPost" id="AddPost">+</button> <br></br>
            <h1 style={{textAlign: "center", margin: "30px", paddingLeft: "150px"}}>Slina</h1> <br></br>
        </div>
        </MediaQuery>

        <Router>
          <div>
              <MediaQuery query='(min-width: 1224px)'>
                <nav className="tabHeader">
                  {history.location.pathname === "/" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/">
                    Home
                    </Link>
                  }

                  {history.location.pathname !== "/" &&
                    <Link 
                    style={this.state.hoverHome ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverHomeOn} 
                    onMouseLeave={this.hoverHomeOff}  
                    onClick={this.selectHome} 
                    to="/">
                    Home
                    </Link>
                  }
                  {history.location.pathname === "/WorkTermOne" && 
                      <Link  
                      style={hoverTabStyle} 
                      to="/WorkTermOne">
                        The Co-operators
                      </Link>
                  }

                  {history.location.pathname !== "/WorkTermOne" && 
                      <Link 
                      onClick={this.selectWorkTermOne} 
                      style={this.state.hoverWorkTermOne ? hoverTabStyle : tabStyle} 
                      onMouseEnter={this.hoverWorkTermOneOn} 
                      onMouseLeave={this.hoverWorkTermOneOff} 
                      to="/WorkTermOne">
                        The Co-operators
                        </Link>
                  }
                  
                {history.location.pathname === "/AboutMe" && 
                <Link
                style={ hoverTabStyle} 
                to="/AboutMe">
                  About Me
                  </Link>
              }

                {history.location.pathname !== "/AboutMe" && 
                <Link
                onClick={this.selectAboutMe} 
                style={this.state.hoverAboutMe ? hoverTabStyle : tabStyle} 
                onMouseEnter={this.hoverAboutMeOn} 
                onMouseLeave={this.hoverAboutMeoff} 
                to="/AboutMe">
                  About Me
                  </Link>
              } 
              </nav>
          </MediaQuery>

          <MediaQuery query='(max-width: 1224px)'>
            <div style={{margin: "10px"}}>
                <CheeseburgerMenu
                  isOpen={this.state.menuOpen}
                  closeCallback={this.closeMenu.bind(this)}>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/">
                          <p style={{mobileOptions}}>Home</p>
                        </Link>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/WorkTermOne">
                          <p style={{mobileOptions}}>The Co-operators</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)}style={{textDecoration: "none"}} to="/AboutMe">
                          <p style={{mobileOptions}}>About Me</p>
                        </Link>
                </CheeseburgerMenu>
          
                <HamburgerMenu
                  isOpen={this.state.menuOpen}
                  menuClicked={this.openMenu.bind(this)}
                  width={32}
                  height={24}
                  strokeWidth={3}
                  rotate={0}
                  color='black'
                  borderRadius={0}
                  animationDuration={0.5}
                />
            </div>

          <div style={{backgroundColor: "white", padding: "2px", paddingBottom: "0px", marginTop: "2px"}}>
              <h1 style={{textAlign: "center", fontSize: "30px", padding: "3px"}}>Slina</h1> <br></br>
          </div>
        </MediaQuery>

            <Switch onChange={this.updateHistory}>
                <Route exact path="/" onChange={this.updateHistory}><HomeForm className="tabContent"/></Route>
                <Route exact path="/WorkTermOne" onChange={this.updateHistory}> <WorkTermOneBlogForm className="tabContent"/> </Route>
                <Route exact path="/AboutMe" onChange={this.updateHistory}><AboutMeForm className="tabContent"/></Route>
            </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

async function checkUser(username, password) {
  let info = {};
  info.username = username;
  info.password = password;
  console.log(info);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/checkUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    data = await rawResponse.json();
  })();

    return data;
}


async function addPost(title, date, description) {
  let info = {};
  info.title = title;
  info.description = description;
  info.date = date;

  console.log(info);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/addPost', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    data = await rawResponse.json();
  })();

    return data;
}


export default App;
