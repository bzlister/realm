import { Typography } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
import Project from "./(common)/project";
import Experiences from "./(common)/experiences";
import Resume from "./resume/resume";
import RealmLink from "./(common)/realm-link";
import GitHubCard from "./(common)/github-card";
import "./page.css";

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
            <h3>Backend & AI platform software engineer based in Orange, CA</h3>
          </div>
        </div>
        <div id="triangle"></div>
      </div>
      <div className="details-container">
        <div className="details-section">
          <h2>About me</h2>
          <p>
            Engineer with an MS in <span className="attention">machine learning</span>, building practical <span className="attention">AI products</span> that
            turn complex data and business workflows into intuitive tools people actually use.
          </p>
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
              tags={["React", "TypeScript"]}
            />
            <Project
              title="This website"
              img="/images/website.png"
              alt="Rendition of this website's home page"
              url="https://github.com/bzlister/realm"
              tags={["React", "Next.js", "TypeScript", "MUI"]}
            />
            <Project
              title="ForgeBeam"
              img="/images/logo_flashlight_realm.png"
              alt="Image of the ForgeBeam logo: a flashlight shining light on a Git merge icon, with the text 'ForgeBeam' in a bold, modern font"
              url="https://forgebeam.net"
              tags={["Azure", ".NET", "React", "PostgreSQL", "TypeScript"]}
            />
          </div>
        </div>
        <div className="details-section">
          <h2>Contributions</h2>
          <div className="projects-container">
            <GitHubCard name="ProjectR.Backend" maintainer="classyk12" description="ProjectR 📅 — Smart Scheduling & Appointment Management" />
            <GitHubCard name="air-convert" maintainer="feldroy" description="Utility for converting HTML to Air Tags" />
          </div>
        </div>
        <div className="resume">
          <Resume />
        </div>
      </div>
    </div>
  );
}
