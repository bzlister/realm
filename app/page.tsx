import { Typography } from "@mui/joy";
import ProfileImage from "./(common)/profile-image";
import "./page.css";

export default function Home() {
  return (
    <div className="page-container">
      <div>
        <div className="intro-container">
          <ProfileImage />
          <div className="intro">
            <Typography level="h1">
              Hey👋 I'm <Typography className="attention">Ben Lister</Typography>
            </Typography>
            <h3>Full-stack developer</h3>
          </div>
        </div>
        <div id="triangle"></div>
      </div>
      <div className="details-container">
        {Array(60)
          .fill(0)
          .map((_, i) => [i, <br />])
          .flat()}
      </div>
    </div>
  );
}
