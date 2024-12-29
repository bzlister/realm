import ContactForm from "../(common)/contact-form";
import "./page.css";

export default function Contact() {
  return (
    <div>
      {/* <div className="contact-header">
        <h2>Let's build something together.</h2>
      </div> */}
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
}
