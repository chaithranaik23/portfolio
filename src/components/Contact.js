import "../css/Contact.css";
import insta from "../images/icons/insta.svg";
import linked from "../images/icons/linked.svg";
function Contact() {
  return (
    <div className="cont">
      <h2 className="cwme">Connect With Me</h2>
      <div className="sm">
        <div className="insta">
          <img src={insta} />
          <a
            className="link"
            href="https://instagram.com/nk_chaithra_?igshid=YTQwZjQ0NmI0OA=="
          >
            Instagram
          </a>
        </div>
        <div className="linked">
          <img src={linked} />
          <a
            className="link"
            href="https://www.linkedin.com/in/chaithra-naik-7117b9228"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="cme">
        <h2 className="cm">Contact Me</h2>
        <form>
          <center>
            <table>
              <tr>
                <td>
                  <label>Name :</label>
                </td>
                <td>
                  <input type="text" placeholder="Enter Your Name" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Mobile :</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Your phone number"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>E-mail :</label>
                </td>
                <td>
                  <input type="email" placeholder="Enter Your email" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Suggestion :</label>
                </td>
                <td>
                  <textarea
                    type="text"
                    rows="5"
                    cols="30"
                    placeholder="Any Suggestion ?? or Want to tell something??"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="button" value="Submit" />
                  {/* <input type="button" value="Reset" /> */}
                </td>
              </tr>
            </table>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Contact;
