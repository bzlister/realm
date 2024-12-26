import { Typography } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
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
        <h2>About me</h2>
        <p>
          I think the act of programming is sublime.
          It is the process of expressing an idea under the engineering system constraints, while optimizing for a weighted combination of performance, simplicity, scalability, and development time.
          I go through this process to create apps and websites with responsive user experiences and backend systems that are fast and reliable.
        </p>
        <p>
          Outside of my work, you can find me planning my next Path of Exile build, or hiking in Shenendoah listening to a sci-fi/fantasy audiobook.
        </p>
      </div>
    </div>
  );
}
