import { Typography } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
import Experience from "./(common)/experience";
import Tags from "./(common)/tags";
import Project from "./(common)/project";
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
            I think programming is sublime. It is the process of expressing an idea using the tools offered by the system, while optimizing for a weighted
            combination of performance, simplicity, scalability, and development time. I iterate through this process to create apps and websites with{" "}
            <span className="attention">responsive user experiences</span> and backend systems that are <span className="attention">fast</span> and{" "}
            <span className="attention">reliable</span>.
          </p>
          <p>
            Outside of my work, you can find me planning my next Path of Exile build, or hiking in Shenandoah while listening to a sci-fi/fantasy audiobook.
          </p>
        </div>
        <div className="details-section">
          <h2>Experience</h2>
          <div className="experiences-container">
            <Experience title="Microsoft - Software Engineer II" startYear="2020" endYear="Present" defaultExpanded>
              <div className="msft">
                <p>
                  Developed features for pro users of Power BI desktop and service. Lead developer for several projects including a new model view UX, adding
                  1st-party support for creating calculation groups, and the client integration for creating Direct Lake semantic models.
                </p>
                <p>
                  In an earlier role, I created and maintained features for the M365 e-commerce platform. Built internal scenario testing framework. Lead
                  developer in a UX redesign effort. Led efforts to improve reliabiliy to 3 9s.
                </p>
              </div>
              <Tags tags={["Angular", "React", "C#", "Typescript", "Redux"]} />
            </Experience>
            <Experience title="Microsoft - Software Engineer Intern" startYear="2019">
              <p>Prototyped a pipeline for managing and assigning gig workloads. Investigated a bug in the Windows 11 out-of-box experience.</p>
              <Tags tags={["C#", "C++", "Azure"]} />
            </Experience>
            <Experience title="CARFAX - Software Engineer Intern" startYear="2018">
              <p>Learned agile practices. Built an internal tool for detecting deprecated config files.</p>
              <Tags tags={["Java"]} />
            </Experience>
          </div>
        </div>
        <div className="details-section">
          <h2>Projects</h2>
          <div className="projects-container">
            <Project
              title="Rubric grader"
              img="/images/grader_dark.png"
              alt="Screenshot of an app displaying a grid-like interface for grading assignments"
              link="https://github.com/bzlister/rubric-grader"
              tags={["Flutter", "Dart"]}
            />
            <Project
              title="Flutter + Firebase auth"
              img="/images/flutter_auth.png"
              alt="Screenshot of an app displaying a standard login UI"
              link="https://github.com/bzlister/auth-tutorial"
              tags={["Flutter", "Dart", "Firebase"]}
            />
            <Project
              title="Code typing animation"
              img="/images/munegascu.gif"
              alt="Animated gif displaying a typing animation of some Typescript code"
              link="https://github.com/bzlister/munegascu"
              tags={["React", "Typescript"]}
            />
            <Project title="This website" tags={["React", "NextJS", "Typescript", "MUI"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
