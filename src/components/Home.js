import "../css/Home.css";
import me from "../images/me.jpg";
import About from "./About.js";
import Skills from "./Skills.js";
import Education from "./Education.js";
import Contact from "./Contact.js";
function Home() {
  return (
    <div>
      <div className="info">
        <h1> Hello<br/>I am Chaithra Naik</h1>
        <img className="me" src={me}/>
      </div>
      <About />
      <Skills />
      {/* <Project/> */}
      <Education/>
      <Contact/>
    </div>
  );
}
export default Home;
