import "../css/Cirtificates.css";
import code from "../images/code.jpeg";
import html from "../images/html.jpeg";
import webdev from "../images/webdev.jpeg";
import internship from "../images/internship.jpeg";

function Cirtificates() {
  return (
    <div className="cirt">
      <div className="cirti">Cirtificates</div>
      <div className="num">
        <div className="o">
          <img className="images" src={code} />
        </div>
        <div className="t">
          <img className="images" src={html} />
        </div>
        <div className="th">
          <img className="images" src={internship} />
        </div>
        <div className="f">
          <img className="images" src={webdev} />
        </div>
      </div>
    </div>
  );
}

export default Cirtificates;
