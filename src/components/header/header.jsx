import "../header/header.css";
import Logo from "../../images/logo.png";
import Lottie from 'react-lottie-player';
import Globe from '../../images/halo.json';
import Rocket from '../../images/rocket.json';
import Galaxy from '..//../images/galaxy.json';
import Down from '..//../images/down.json';
import Waves from '../wave.jsx';

function App() {
  const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <div className="App">
     <div className="Explor"></div>
    <div className="Header">
    <a href="/" className="logos"><img src={Logo} className="logo" alt="logo" width={140} height={100}></img></a>
      <div className="App-header">
        <p>Home</p>
        <p>Explore</p>
        <p>About Us</p>
        <p>Explore</p>
        <p>About Us</p>
        </div>
    </div>
    <div className="Body">
    <Lottie
    className="rocket"
      loop
      animationData={Rocket}
      play
    />
        <div className="about">
        
            <p>
            Welcome To Project Finder<br></br>Get ready to collaborate with Team Mates<br></br>
            <p className="desc">This is site best place to find your project and friends<br></br>contibute to project and find your teamates...</p>
            <div className="Explo"></div>
            <button className="next">Explore {'>>'}</button>
            </p>
            <Lottie
    className="galaxy"
      loop
      animationData={Galaxy}
      play
    />
        </div>
        <div className="anime">
        <Lottie
        className="globe"
      loop
      animationData={Globe}
      play
      style={{ width: 450, height: 450}}
      onClick={shoot}
    />
        </div>
    </div>
    
    <center>
    <div className="spiral">
    <div><Waves/></div>
    <div className="glass">
  
            <p className="about-text">
            Welcome To Project Finder Get ready to collaborate with Team Mates
            <div className="Explore"></div>
            </p>
    </div>
    </div>
    <br></br>
    </center>
   <center><div className="down">
    <Lottie
    className="down"
      loop
      animationData={Down}
      play
    />
    </div></center>
    </div>
  );
}

export default App;
