import { IconButton } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
        <div className="socials">
          <a target="_blank" rel="noopener noreferrer" href="mailto:bzlister@gmail.com">
            <IconButton aria-label="email">
              <EmailIcon />
            </IconButton>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/bzlister">
            <IconButton aria-label="github">
              <GitHubIcon />
            </IconButton>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-lister-420b327a/">
            <IconButton aria-label="linkedin">
              <LinkedInIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}
