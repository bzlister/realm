import { Typography, List, SvgIcon } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
import Project from "./(common)/project";
import Experiences from "./(common)/experiences";
import Resume from "./resume/resume";
import ListItemLink from "./(common)/list-item-link";
import "./page.css";
import GitHubCard from "./(common)/github-card";

export default function Home() {
  return (
    <div className="page-container">
      <div>
        <div className="hero-container">
          <ProfileImage />
          <div className="intro">
            <Typography level="h1">
              Hey<span className="wave">👋</span> I'm <Typography className="attention">Ben Lister</Typography>
            </Typography>
            <h3>Full-stack software engineer based in the D.C. metro area</h3>
          </div>
        </div>
        <div id="triangle"></div>
      </div>
      <div className="details-container">
        <div className="details-section">
          <h2>About me</h2>
          <p>
            Professional developer building <span className="attention">reliable backend systems</span> and{" "}
            <span className="attention">thoughtful user experiences</span>. Let me know if you're solving complex problems using AI, data modeling, probability
            theory, or distributed computing&mdash;I'd love to talk.
          </p>
          <div>
            <List size="md">
              <ListItemLink
                prefix="⌨️ Keyboard:"
                linkText="Vortex Race 3"
                url="https://vortexgear.store/products/race-3-micro-usb?srsltid=AfmBOopKb6VWHS0RNJsehMHVHjk-1DjRakW7IWgZb-BoIjgzG96YTpsN"
              />
              <ListItemLink
                prefix={
                  <span>
                    <VSCodeIcon /> Theme:
                  </span>
                }
                linkText="Kelp Forest Theme"
                url="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode"
              />
              <ListItemLink prefix="📖 Reading:" linkText="The Devils (Joe Abercrombie)" url="https://joeabercrombie.com/books/the-devils/" />
            </List>
          </div>
        </div>
        <div className="details-section">
          <h2>Experience</h2>
          <Experiences />
        </div>
        <div className="details-section">
          <h2>Projects</h2>
          <div className="projects-container">
            <Project
              title="Rubric grader"
              img="/images/grader_dark.png"
              alt="Screenshot of an app displaying a grid-like interface for grading assignments"
              url="https://github.com/bzlister/rubric-grader"
              tags={["Flutter", "Dart"]}
            />
            <Project
              title="Firebase auth"
              img="/images/flutter_auth.png"
              alt="Screenshot of an app displaying a standard login UI"
              url="https://github.com/bzlister/auth-tutorial"
              tags={["Flutter", "Dart", "Firebase"]}
            />
            <Project
              title="Code typing animation"
              img="/images/munegascu.gif"
              unoptimized
              alt="Animated gif displaying a typing animation of some Typescript code"
              url="https://github.com/bzlister/munegascu"
              tags={["React", "Typescript"]}
            />
            <Project
              title="This website"
              img="/images/website.png"
              alt="Rendition of this website's home page"
              url="https://github.com/bzlister/realm"
              tags={["React", "NextJS", "Typescript", "MUI"]}
            />
          </div>
        </div>
        <div className="details-section">
          <h2>Contributions</h2>
          <div className="projects-container">
            <GitHubCard name="ProjectR.Backend" maintainer="classyk12" description="ProjectR 📅 — Smart Scheduling & Appointment Management" />
          </div>
        </div>
        <div className="resume">
          <Resume />
        </div>
      </div>
    </div>
  );
}

function VSCodeIcon() {
  return (
    <SvgIcon className="vscode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z"
        style={{ fill: "#0065a9" }}
      />
      <path
        d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z"
        style={{ fill: "#007acc" }}
      />
      <path
        d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z"
        style={{ fill: "#1f9cf0" }}
      />
    </SvgIcon>
  );
}
