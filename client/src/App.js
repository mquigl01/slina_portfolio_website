import React from 'react';
import './App.css';
import AboutMeForm from "./Components/AboutMeForm";
import HomeForm from "./Components/HomeForm";
import Portraits from "./Components/Portraits";
import PersonalIllustration from "./Components/PersonalIllustrations";
import Rotoscopes from "./Components/Rotoscopes";
import Observational from "./Components/Observational";
import Contact from "./Components/Contact";
import Design from "./Components/Design";
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
  color: 'black',
  fontSize: '40px',
  textDecoration: 'none',
  padding: "20px"
};

const hoverTabStyle = {
  color: '#006699',
  fontSize: '40px',
  paddingBottom: "20px",
  textDecoration: 'none',
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
      hoverContact: false,
      hoverHome: false,
      hoverPortfolio: false,
      hoverDesign: false,
      hoverObservation: false,
      hoverPersonal: false,
      hoverPortraits: false,
      hoverRotoscopes: false,
      hoverAboutMe: false,
      menuOpen: false,
      showMenu: false
    };
    this.hoverDesignOn = this.hoverDesignOn.bind(this);
    this.hoverDesignOff = this.hoverDesignOff.bind(this);
    this.selectDesign = this.selectDesign.bind(this);
    
    this.hoverObservationalOn = this.hoverObservationalOn.bind(this);
    this.hoverObservationalOff = this.hoverObservationalOff.bind(this);
    this.selectObservational = this.selectObservational.bind(this);

    this.hoverPersonalOn = this.hoverPersonalOn.bind(this);
    this.hoverPersonalOff = this.hoverPersonalOff.bind(this);
    this.selectPersonal = this.selectPersonal.bind(this);

    this.hoverPortraitsOn = this.hoverPortraitsOn.bind(this);
    this.hoverPortraitsOff = this.hoverPortraitsOff.bind(this);
    this.selectPortraits = this.selectPortraits.bind(this);

    this.hoverRotoscopesOn = this.hoverRotoscopesOn.bind(this);
    this.hoverRotoscopesOff = this.hoverRotoscopesOff.bind(this);
    this.selectRotoscopes = this.selectRotoscopes.bind(this);

    this.hoverContactOn = this.hoverContactOn.bind(this);
    this.hoverContactOff = this.hoverContactOff.bind(this);

    this.handleStateChange = this.handleStateChange.bind(this);
    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.hoverAboutMeOn = this.hoverAboutMeOn.bind(this);
    this.hoverAboutMeoff = this.hoverAboutMeoff.bind(this);
    this.selectHome = this.selectHome.bind(this);
    this.selectAboutMe = this.selectAboutMe.bind(this);
    this.selectContact = this.selectContact.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    this.changeDropDown = this.changeDropDown.bind(this);
    this.showMenu = this.showMenu.bind(this); 
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    let visible = this.state.showMenu;
    this.setState({
      showMenu: !visible,
    });
  }

  changeDropDown(e) {
    this.setState({ selectedOption:  e.target.value});
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  updateHistory() {
    history = createBrowserHistory();
  }

  async selectDesign() {
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: true });
    await history.push("/Design");
  }
  hoverDesignOn(){
    this.setState({ hoverDesign: true });
  }
  hoverDesignOff(){ 
    if(history.location.pathname !== "/Design") {
      this.setState({ hoverDesign: false });
    }
  }

  async selectObservational() {
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverObservation: true });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: false });
    await history.push("/Observational");
  }
  hoverObservationalOn(){
    this.setState({ hoverObservation: true });
  }
  hoverObservationalOff(){ 
    if(history.location.pathname !== "/Observational") {
      this.setState({ hoverObservation: false });
    }
  }

  async selectPersonal() {
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: true });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: false });
    await history.push("/PersonalIllustration");
  }
  hoverPersonalOn(){
    this.setState({ hoverPersonal: true });
  }
  hoverPersonalOff(){ 
    if(history.location.pathname !== "/PersonalIllustration") {
      this.setState({ hoverPersonal: false });
    }
  }

  async selectPortraits() {
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: true });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: false });
    await history.push("/Portraits");
  }
  hoverPortraitsOn(){
    this.setState({ hoverPortraits: true });
  }
  hoverPortraitsOff(){ 
    if(history.location.pathname !== "/Portraits") {
      this.setState({ hoverPortraits: false });
    }
  }

  async selectRotoscopes() {
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: true });
    this.setState({ hoverDesign: false });
    await history.push("/Rotoscopes");
  }
  hoverRotoscopesOn(){
    this.setState({ hoverRotoscopes: true });
  }
  hoverRotoscopesOff(){ 
    if(history.location.pathname !== "/Rotoscopes") {
      this.setState({ hoverRotoscopes: false });
    }
  }

  async selectHome() {
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: false });
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


  async selectContact() {
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverContact: true });
    await history.push("/Contact");
  }
  hoverContactOn(){
    this.setState({ hoverContact: true });
  }
  hoverContactOff(){ 
    if(history.location.pathname !== "/Contact") {
      this.setState({ hoverContact: false });
    }
  }

  async selectAboutMe(){
    this.setState({ hoverContact: false });
    this.setState({ hoverAboutMe: true });
    this.setState({ hoverObservation: false });
    this.setState({ hoverPersonal: false });
    this.setState({ hoverPortraits: false });
    this.setState({ hoverRotoscopes: false });
    this.setState({ hoverDesign: false });
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
                <label style={{color: "black", fontSize: "80px", position: "absolute", left: "50px", top: "0px"}}>Slina Frich</label>

                <div style={{float:"Right", paddingRight: "60px"}}>
                  {history.location.pathname === "/" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/">
                    home
                    </Link>
                  }

                  {history.location.pathname !== "/" &&
                    <Link 
                    style={this.state.hoverHome ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverHomeOn} 
                    onMouseLeave={this.hoverHomeOff}  
                    onClick={this.selectHome} 
                    to="/">
                    home
                    </Link>
                  }

                  <div className="dropdown">
                    {(history.location.pathname === "/PersonalIllustration" || history.location.pathname === "/Portraits" || history.location.pathname === "/Design" ||
                      history.location.pathname === "/Observational" || history.location.pathname === "/Rotoscopes") &&
                      <label style={hoverTabStyle} >portfolio ↴</label>
                    }
                    {(history.location.pathname !== "/PersonalIllustration" && history.location.pathname !== "/Portraits" && history.location.pathname !== "/Design" &&
                      history.location.pathname !== "/Observational" && history.location.pathname !== "/Rotoscopes") &&
                      <label style={this.state.Portfolio ? hoverTabStyle : tabStyle} >portfolio ↴</label>
                    }

                  <div className="dropdown-content">
                      {history.location.pathname === "/PersonalIllustration" &&
                      <div>
                        <Link style={hoverTabStyle} onMouseEnter={this.hoverPersonalOn}  onMouseLeave={this.hoverPersonalOff} onClick={this.selectPersonal}  to="/PersonalIllustration">personal illustration</Link> <br></br>
                      </div>
                      }
                      {history.location.pathname !== "/PersonalIllustration" &&
                      <div>
                        <Link style={this.state.hoverPersonal ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverPersonalOn}  onMouseLeave={this.hoverPersonalOff} onClick={this.selectPersonal} to="/PersonalIllustration">personal illustration</Link> <br></br>
                      </div>
                      }

                      {history.location.pathname === "/Portraits" &&
                        <div>
                          <Link style={hoverTabStyle} onMouseEnter={this.hoverPortraitsOn}  onMouseLeave={this.hoverPortraitsOff} onClick={this.selectPortraits} to="/Portraits">portraits</Link> <br></br>
                        </div>
                      }
                      {history.location.pathname !== "/Portraits" &&
                        <div>
                          <Link style={this.state.hoverPortraits ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverPortraitsOn}  onMouseLeave={this.hoverPortraitsOff} onClick={this.selectPortraits} to="/Portraits">portraits</Link> <br></br>
                        </div>
                      }

                      {history.location.pathname === "/Design" &&
                        <div>
                          <Link style={hoverTabStyle} onMouseEnter={this.hoverDesignOn}  onMouseLeave={this.hoverDesignOff} onClick={this.selectDesign} to="/Design">design</Link> <br></br>
                        </div>
                      }
                      {history.location.pathname !== "/Design" &&
                        <div>
                            <Link style={this.state.hoverDesign ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverDesignOn}  onMouseLeave={this.hoverDesignOff} onClick={this.selectDesign} to="/Design">design</Link> <br></br>
                        </div>
                      }

                      {history.location.pathname === "/Observational" &&
                      <div>
                          <Link style={hoverTabStyle} onMouseEnter={this.hoverObservationalOn}  onMouseLeave={this.hoverObservationalOff} onClick={this.selectObservational}  to="/Observational">observational</Link> <br></br>
                      </div>
                      }
                      {history.location.pathname !== "/Observational" &&
                      <div>
                        <Link style={this.state.hoverObservation ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverObservationalOn}  onMouseLeave={this.hoverObservationalOff} onClick={this.selectObservational} to="/Observational">observational</Link> <br></br>
                      </div>
                      }

                      {history.location.pathname === "/Rotoscopes" && 
                      <div>
                          <Link style={hoverTabStyle} onMouseEnter={this.hoverRotoscopesOn}  onMouseLeave={this.hoverRotoscopesOff} onClick={this.selectRotoscopes} to="/Rotoscopes">rotoscopes</Link> <br></br>
                      </div>
                      }
                      {history.location.pathname !== "/Rotoscopes" &&
                      <div>
                          <Link style={this.state.hoverRotoscopes ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverRotoscopesOn}  onMouseLeave={this.hoverRotoscopesOff} onClick={this.selectRotoscopes} to="/Rotoscopes">rotoscopes</Link> <br></br>
                      </div>
                      }
                      </div>
                  </div>
                

                {history.location.pathname === "/AboutMe" && 
                <Link
                style={ hoverTabStyle} 
                to="/AboutMe">
                  about me
                  </Link>
              }

                {history.location.pathname !== "/AboutMe" && 
                <Link
                onClick={this.selectAboutMe} 
                style={this.state.hoverAboutMe ? hoverTabStyle : tabStyle} 
                onMouseEnter={this.hoverAboutMeOn} 
                onMouseLeave={this.hoverAboutMeoff} 
                to="/AboutMe">
                  about me
                  </Link>
              }

                {history.location.pathname === "/Contact" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/Contact">
                    contact me
                    </Link>
                  }

                  {history.location.pathname !== "/Contact" &&
                    <Link 
                    style={this.state.hoverContact ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverContactOn} 
                    onMouseLeave={this.hoverContactOff}  
                    onClick={this.selectContact} 
                    to="/Contact">
                    contact me
                    </Link>
                  }
              </div> 
              </nav>
          </MediaQuery>

          <MediaQuery query='(max-width: 1223px)'>
            <div style={{margin: "10px"}}>
                <CheeseburgerMenu
                  isOpen={this.state.menuOpen}
                  closeCallback={this.closeMenu.bind(this)}>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/">
                          <p style={{mobileOptions}}>home</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/PersonalIllustration">
                        <p style={{mobileOptions}}>personal illustration</p></Link>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Portraits">
                          <p style={{mobileOptions}}>portraits</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Design">
                          <p style={{mobileOptions}}>design</p>
                        </Link>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Observational">
                          <p style={{mobileOptions}}>observational</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Rotoscopes">
                          <p style={{mobileOptions}}>rotoscopes</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/AboutMe">
                          <p style={{mobileOptions}}>about me</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Contact">
                          <p style={{mobileOptions}}>contact me</p>
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
            <div  style={{paddingBottom: "30px"}}>
              <label style={{color: "black", fontSize: "60px"}}>Slina Frich</label>
            </div>
        </MediaQuery>

            <Switch onChange={this.updateHistory}>
                <Route exact path="/" onChange={this.updateHistory}><HomeForm className="tabContent"/></Route>
                <Route exact path="/AboutMe" onChange={this.updateHistory}><AboutMeForm className="tabContent"/></Route>
                <Route exact path="/Portraits" onChange={this.updateHistory}><Portraits className="tabContent"/></Route>
                <Route exact path="/Design" onChange={this.updateHistory}> <Design className="tabContent"/> </Route>
                <Route exact path="/PersonalIllustration" onChange={this.updateHistory}><PersonalIllustration className="tabContent"/></Route>
                <Route exact path="/Observational" onChange={this.updateHistory}><Observational className="tabContent"/></Route>
                <Route exact path="/Rotoscopes" onChange={this.updateHistory}><Rotoscopes className="tabContent"/></Route>
                <Route exact path="/Contact" onChange={this.updateHistory}><Contact className="tabContent"/></Route>
            </Switch>
        </div>
      </Router> <br></br>
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.instagram.com/slick_frick_/" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.youtube.com/channel/UCPY6yZMhmFBMisG1AJo9mCg" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.linkedin.com/in/slina-frichitthavong-a60790159/?originalSubdomain=ca" />
      </div>
    );
  }
}


export default App;
