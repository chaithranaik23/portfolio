import "../css/Skills.css";
import html5 from "../images/icons/html5.svg";
import css from "../images/icons/css.svg";
import JS from "../images/icons/JS.svg";
import C from "../images/icons/C.svg";
import java from "../images/icons/java.svg";
function Skills() {
  return (
    <div className="skill">
      
      <div class="body">
      <h1 className="skil">Skills</h1>
        <div className="first">
          <img className="html5" src={html5} />
          <h4>HTML</h4>
        </div>
        <div className="second">
          <img className="css" src={css} />
          <h4>CSS</h4>
        </div>
        <div className="third">
          <img className="JS" src={JS} />
          <h4>JavaScript</h4>
        </div>
        <div className="fourth">
          <img className="C" src={C} />
          <h4>C</h4>
        </div>
        <div className="fifth">
          <img className="java" src={java} />
          <h4>Java</h4>
        </div>
      </div>
    </div>
  );
}

export default Skills;
