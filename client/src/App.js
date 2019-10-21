import React from 'react';
import './App.css';
import Modal from 'react-modal';
import AboutMeForm from "./Components/AboutMeForm";
import HomeForm from "./Components/HomeForm";
import Portfolio from "./Components/Portfolio";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import MediaQuery  from 'react-responsive';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import { SocialIcon } from 'react-social-icons';
let history = null;

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
  color: 'white',
  fontWeight: "bold",
  fontSize: '24px',
  textDecoration: 'none',
  padding: "20px"
};

const hoverTabStyle = {
  color: 'black',
  fontSize: '24px',
  fontWeight: "bold",
  paddingBottom: "20px",
  textDecoration: 'none',
  textDecoration: 'underline',
  padding: "20px"
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
      hoverPortfolio: false,
      hoverAboutMe: false,
      modalIsOpen: false,
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.hoverPortfolioOn = this.hoverPortfolioOn.bind(this);
    this.hoverPortfolioOff = this.hoverPortfolioOff.bind(this);
    this.hoverAboutMeOn = this.hoverAboutMeOn.bind(this);
    this.hoverAboutMeoff = this.hoverAboutMeoff.bind(this);
    this.selectHome = this.selectHome.bind(this);
    this.selectPortfolio = this.selectPortfolio.bind(this);
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
    this.setState({ hoverPortfolio: false });
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

  async selectPortfolio(){
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverPortfolio: true });
    this.setState({ hoverHome: false });
    await history.push("/Portfolio");
  }

  hoverPortfolioOn(){
    this.setState({ hoverPortfolio: true });
  }

  hoverPortfolioOff() { 
    if(history.location.pathname !== "/Portfolio") {
      this.setState({ hoverPortfolio: false });    
    }
  }

  async selectAboutMe(){
    this.setState({ hoverAboutMe: true });
    this.setState({ hoverPortfolio: false });
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

  render() {
    return (
      <div>

        <Router>
          <div>
              <MediaQuery query='(min-width: 1224px)'>
                <nav className="tabHeader">
                <label style={{color: "white", fontWeight: "bold", fontSize: "35px"}}>Slina Frichitthavong</label>

                <div style={{float:"Right", paddingRight: "60px"}}>
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
                  {history.location.pathname === "/Portfolio" && 
                      <Link  
                      style={hoverTabStyle} 
                      to="/Portfolio">
                        Portfolio
                      </Link>
                  }

                  {history.location.pathname !== "/Portfolio" && 
                      <Link 
                      onClick={this.selectPortfolio} 
                      style={this.state.hoverPortfolio ? hoverTabStyle : tabStyle} 
                      onMouseEnter={this.hoverPortfolioOn} 
                      onMouseLeave={this.hoverPortfolioOff} 
                      to="/Portfolio">
                        Portfolio
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
              </div> 
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
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Portfolio">
                          <p style={{mobileOptions}}>Portfolio</p>
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
                  color='white'
                  borderRadius={0}
                  animationDuration={0.5}
                />
            </div>
            <div  style={{paddingBottom: "30px"}}>
              <label style={{color: "white", fontWeight: "bold", fontSize: "35px"}}>Slina Frichitthavong</label>
            </div>
        </MediaQuery>

            <Switch onChange={this.updateHistory}>
                <Route exact path="/" onChange={this.updateHistory}><HomeForm className="tabContent"/></Route>
                <Route exact path="/Portfolio" onChange={this.updateHistory}> <Portfolio className="tabContent"/> </Route>
                <Route exact path="/AboutMe" onChange={this.updateHistory}><AboutMeForm className="tabContent"/></Route>
            </Switch>
        </div>
      </Router> <br></br>
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.instagram.com/slick_frick_/" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.facebook.com/slina.frichitthavong" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.youtube.com/channel/UCPY6yZMhmFBMisG1AJo9mCg" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.linkedin.com/in/slina-frichitthavong-a60790159/?originalSubdomain=ca" />
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

export default App;
