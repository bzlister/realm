import { Typography } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
import Experience from "./(common)/experience";
import "./page.css";
import Tags from "./(common)/tags";

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
          <div className="experiences-container">
            <Experience title="Microsoft - Software Engineer II" startYear="2020" endYear="Present" defaultExpanded>
              <ul>
                <li><span>2022 - Present (SWE 2):</span>Developed features for pro users of Power BI desktop and service. Shipped a new UX in the model view. Lead developer in adding 1st-party support for calculation group authoring and for creating Direct Lake semantic models.</li>
                <li><span>2020 - 2022 (SWE 1):</span>Developed features for the M365 Signup e-commerce platform. Built internal scenario testing framework. Lead developer in a UX redesign effort.</li>
              </ul>
              <Tags tags={["Angular", "React", "C#", "Typescript", "Redux"]}/>
            </Experience>
            <Experience title="Microsoft - Software Engineer Intern" startYear="2019">
              <Tags tags={["C#", "C++", "Azure"]} />
            </Experience>
            <Experience title="CARFAX - Software Engineer Intern" startYear="2018">
              Learned agile practices. Built an internal tool for detecting deprecated business logic.
              <Tags tags={["Java"]} />
            </Experience>
          </div>
        </div>
        <div className="details-section">
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  );
}
