import "../css/Skills.css";
import html5 from "../images/icons/html5.svg";
import css from "../images/icons/css.svg";
import JS from "../images/icons/JS.svg";
import C from "../images/icons/C.svg";
import java from "../images/icons/java.svg";
import python from "../images/icons/python.svg";
// import Card from  "./Card.js";
function Skills() {
  // const SkillsP=[
  //   { id:1,
  //     H:"html",
  //     // P:"Content1",
  //     I:"JS"
  //   },
  //   {
  //     id:2,
  //     H:"css",
  //     // P:"Content2",
  //     I:"CSS"
  //   },
  //   {
  //     id:3,
  //     H:"javascript",
  //     // P:"Content3",
  //     I:"js"
  //   },
  //   {
  //     id:4,
  //     H:"c",
  //     // P:"Content3",
  //     I:"c"
  //   },
  //   {
  //     id:5,
  //     H:"java",
  //     // P:"Content3",
  //     I:"java"
  //   },
  //   {
  //     id:4,
  //     H:"python",
  //     // P:"Content3",
  //     I:"python"
  //   }
  // ]
  

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
        <div className="sixth">
          <img className="python" src={python}/>
          <h4>Python</h4>
        </div>
      </div>
      {/*  <>{
        SkillsP.map((item) => (
        <Card Skills={item}/>
        ))}
       </> */}
    </div>
  );
}

export default Skills;
