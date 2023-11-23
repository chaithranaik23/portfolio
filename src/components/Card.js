import { useState } from "react";
import "../css/Card.css";
// import JS from "../images/icons/JS.svg";
// import CSS from "../images/icons/css.svg";
// import html from "../images/icons/html5.svg";
import a from "../images/card/1.jpeg";
import b from "../images/card/2.jpeg";
import c from "../images/card/3.jpeg";
import d from "../images/card/4.jpeg";
import e from "../images/card/5.jpeg";
import f from "../images/card/6.jpeg";
import g from "../images/card/7.jpeg";
import h from "../images/card/8.jpeg";
function Card({More}){
    // const [img,setImg]=useState(null);
    const imgfun =(value)=>{
        if(value === 'a'){
            return a;
        }
        else if(value === 'b'){
            return b;
        }
        else if(value === 'c'){
            return c;
        }
        else if(value === 'd'){
            return d;
        }
        else if(value === 'e'){
            return e;
        }
        else if(value === 'f'){
            return f;
        }
        else if(value === 'g'){
            return g;
        }
        else if(value === 'h'){
            return h;
        }
    }
    return (
      <div className="card">
      {/* <h1>{Skills.H}</h1> */}
      {/* <p>{Skills.P}</p> */}
      <img src={imgfun(More.I)}/>
      </div>
    );
  }

  export default Card;