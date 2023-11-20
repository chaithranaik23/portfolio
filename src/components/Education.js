import "../css/Education.css";
function Education() {
  return (
    <div className="edu">
        <h4 className="myedu">My Education</h4>
      <div className="be">
        <ul>
          <li className="head"><u>Degree</u></li>
          <li>B.E in Computer Science and Engineering</li>
          <li>Year : 2021-2025</li>
          <li>Canara Engineering Collage Benjanapadavu</li>
          <li className="mark">SGPA (till 4th sem) : 7.7</li>
        </ul>
      </div>
      <div className="pu">
        <ul>
          <li className="head"><u>PUC</u></li>
          <li>Combination : PCMCs</li>
          <li>Year : 2019-2021</li>
          <li>Viveka PU Collage Kota</li>
          <li>Marks : 542/600</li>
          <li className="mark">Percentage : 90.33%</li>
        </ul>
      </div>
      <div className="hs">
        <ul>
          <li className="head"><u>Highschool</u></li>
          <li>8th to SSLC</li>
          <li>Year : 2016-2019</li>
          <li>Sharada Highschool Cherkady</li>
          <li>Marks : 567/625</li>
          <li className="mark">Percentage : 90.72%</li>
        </ul>
      </div>
      <div className="pr">
        <ul>
          <li className="head"><u>Primary</u></li>
          <li>1st to 7th Standard</li>
          <li>Year : 2009-2016</li>
          <li>Govt. Model Higher Primary School Cherkady, Pethri</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
