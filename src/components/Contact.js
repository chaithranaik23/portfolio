import "../css/Contact.css";
import insta from "../images/icons/insta.svg";
import linked from "../images/icons/linked.svg";
import github from "../images/icons/github.svg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Loading from "../images/icons/loading.svg";
// function Contact() {
export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_krgei2k",
        "template_hp945mi",
        form.current,
        "uD4CXkQ3rFZ0rsGY-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted succesfully");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div className="git">
          <img src={github} />
          <a
            className="link"
            href="https://github.com/chaithranaik23"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="cme">
        <h2 className="cm">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <center>
            <table>
              <tr>
                <td>
                  <label>Name :</label>
                </td>
                <td>
                  <input
                    name="username"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Mobile :</label>
                </td>
                <td>
                  <input
                    name="phoneno"
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
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your email"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Suggestion :</label>
                </td>
                <td>
                  <textarea
                    name="sugg"
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
                  {loading ? (
                    <img className="load" src={Loading} alt="Loading..." />
                  ) : (
                    <input type="submit" value="Submit" />
                  )}
                </td>
              </tr>
            </table>
          </center>
        </form>
      </div>
      <footer>&#169; Chaithra Naik</footer>
    </div>
  );
};

export default Contact;
