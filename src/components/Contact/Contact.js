import React, { useState } from "react";
import "../Contact/Contact.css";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
const Result = () => {
  return (
    <p
      style={{
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        width: "60%",
        padding: "10px",
      }}
    >
      Mail Sent Successfully
    </p>
  );
};
const Contact = () => {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4i8sc8u",
        "template_ud107pc",
        e.target,
        "user_vS4dymrTlg495yr9cCTHL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  //HIDE RESULTS

  setTimeout(() => {
    setResult(false);
  }, 5000);
  return (
    <div class="contact-section ">
      <div class="contact-info">
        <Fade left>
          <h2>Contact Me</h2>

          <div>
            <i class="fas fa-map-marker-alt"></i>Chattogram,Bangladesh
          </div>

          <div>
            <i class="fas fa-envelope"></i>sanjidanowrin11@gmail.com
          </div>
          <div>
            <i class="fas fa-phone"></i>+8801571736418
          </div>
          <div>
            <i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM
          </div>
        </Fade>
      </div>

      <div className="contact-form">
        <Fade right>
          <h2>Get In Touch</h2>
        </Fade>
        <Fade right>
          <form class="contact" action="" onSubmit={sendEmail}>
            <input
              type="text"
              name="fullName"
              class="text-box"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              class="text-box"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            />
            <input type="submit" name="submit" class="send-btn" value="Send" />
          </form>
        </Fade>
        <div className="row">{result ? <Result /> : null}</div>
      </div>
    </div>
  );
};

export default Contact;
