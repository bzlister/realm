import { Typography } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
import Experience from "./(common)/experience";
import "./page.css";

export default function Home() {
  return (
    <div className="page-container">
      <div>
        <div className="hero-container">
          <ProfileImage />
          <div className="intro">
            <Typography level="h1">
              Hey👋 I'm <Typography className="attention">Ben Lister</Typography>
            </Typography>
            <h3>Full-stack developer based in the D.C. metro area</h3>
          </div>
        </div>
        <div id="triangle"></div>
      </div>
      <div className="details-container">
        <div className="details-section">
          <h2>About me</h2>
          <p>
            I think programming is sublime.
            It is the process of expressing an idea using the tools offered by the system, while optimizing for a weighted combination of performance, simplicity, scalability, and development time.
            I iterate through this process to create apps and websites with <span className="attention">responsive user experiences</span> and backend systems that are <span className="attention">fast</span> and <span className="attention">reliable</span>.
          </p>
          <p>
            Outside of my work, you can find me planning my next Path of Exile build, or hiking in Shenandoah while listening to a sci-fi/fantasy audiobook.
          </p>
        </div>
        <div className="details-section">
          <h2>Experience</h2>
          <Experience title="Microsoft - Software Engineer II" startYear="2019">Built e-commerce features for M365 Signup. Internal transfer to Power BI in 2022.</Experience>
        </div>
        <div className="details-section">
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  );
}
