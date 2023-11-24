import "../css/About.css";

function About() {
  return (
    <div>
      <div class="abtme">
        <h1 className="name">Chaithra Naik</h1>
        <div class="navebar1">
          <div>
            <i class="fa-solid fa-bars" onclick="show()"></i>
          </div>
        </div>
        <h2>
          <a href="https://www.canaraengineering.in/">
            Canara Engineering Collage
          </a>{" "}
          Benjanapadavu
        </h2>
        <div>
          <p className="p1">
            Iam from <mark>Udupi</mark> Iam currently pursuing B.E in Computer
            sciencr and engineering in 3rd year.{" "}
          </p>
        </div>
        {/* <hr />
        <button type="button" onclick="showElement()">
          Click Me!
        </button>
        <hr /> */}
        <p id="hidden">
          I am currently learning Reactjs. I learnt html, css. I know little
          about Javascript, PHP and SQL.
        </p>
        <div class="skills">
          <p className="p2">
            I have many skills like time management; I can manage time for work,
            studies, and enjoyment.
          </p>
          <div class="navebar2" id="show">
            <div class="nave1">
              <h3 onclick="show1()">About Me</h3>
              <h3>Skills</h3>
              <h3>Projects</h3>
              <h3>Education</h3>
              <h3>Contact</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <script>
            function showElement() {
            var element = document.getElementById('hidden');
            if (element.style.display == '' || element.style.display == 'none') {
                element.style.display = 'block'; 
            }
            else
            if(element.style.display=='block')
            {
            element.style.display='none' ;}
            }
        </script> */}

      {/* <footer> &#169; Chaithra Naik</footer> */}
    </div>
  );
}

export default About;
