import { Divider, Grid, Typography, Tabs, TabList, Tab, Button, ButtonGroup } from "@mui/joy";
import "./page.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <div style={{ width: "20px", height: "20px" }}></div>
        <div className="intro">
          <Typography level="h1">
            Hey👋 I'm <Typography className="attention">Ben Lister</Typography>
          </Typography>
          <h3>Full-stack engineer</h3>
        </div>
      </div>
      <Divider />
    </div>
  );
}
