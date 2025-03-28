import { SvgIconComponent } from "@mui/icons-material";
import { Card, Typography } from "@mui/joy";
import "./service-card.css";

export default function ServiceCard({ title, onClick, Icon }: { title: string; onClick: () => void; Icon: SvgIconComponent }) {
  return (
    <Card className="service-card" onClick={onClick}>
      <Typography className="title" level="title-lg">
        {title}
      </Typography>
      <Icon className="service-icon" />
    </Card>
  );
}
