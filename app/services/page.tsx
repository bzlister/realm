import { Card, Typography } from "@mui/joy";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import "./page.css";

export default function Services() {
  return (
    <div>
      <div className="services-container">
        <Card className="service">
          <Typography className="title" level="title-lg">
            Tutoring
          </Typography>
          <SchoolOutlinedIcon className="service-icon" />
          <p>Private/group instruction in computer science and software development. In-person or virtual.</p>
        </Card>
        <Card className="service">
          <Typography className="title" level="title-lg">
            Freelancing
          </Typography>
          <CodeOutlined className="service-icon" />
          <p>I can help develop your app or website.</p>
        </Card>
      </div>
    </div>
  );
}
