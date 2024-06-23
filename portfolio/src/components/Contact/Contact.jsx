import "./Contact.css";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

function Contact() {
  return (
    <div id="contact" className="container">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:noloabelmaleka@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:noloabelmaleka@gmail.com">noloabelmaleka@gmail.com</a>
        </div>
        <div>
          <a href="tel:+27662673468">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+27662673468">(+27) 662673468</a>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Contact;

