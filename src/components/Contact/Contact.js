import React, { useState } from "react";
import "../Contact/Contact.css";
import emailjs from "emailjs-com";
const Result = () => {
  return <p>sent</p>;
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
    <div id="contact">
      <div class="contact-section ">
        <div class="contact-info">
          <div>
            <i class="fas fa-map-marker-alt"></i>Address, City, Country
          </div>
          <div>
            <i class="fas fa-envelope"></i>contact@email.com
          </div>
          <div>
            <i class="fas fa-phone"></i>+00 0000 000 000
          </div>
          <div>
            <i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM
          </div>
        </div>
        <div class="contact-form">
          <h2>Contact Us</h2>
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
          <div className="row">{result ? <Result /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
