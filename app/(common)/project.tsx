import { Card, CardOverflow, Link, Typography } from "@mui/joy";
import Image from "next/image";
import Tags from "./tags";
import "./project.css";

export default function Project({
  title,
  img,
  alt,
  url,
  description,
  unoptimized,
  tags,
}: {
  title: string;
  img?: string;
  alt?: string;
  url?: string;
  description?: string;
  unoptimized?: boolean;
  tags: string[];
}) {
  return (
    <Card className="project" aria-label={url ? "Clickable tile to navigate to project github repository" : "Project tile"}>
      <CardOverflow className="image-container">
        {img && alt ? <Image src={img} alt={alt} loading="lazy" unoptimized={unoptimized} fill /> : <div className="imageless-project">{description}</div>}
      </CardOverflow>
      <div className="project-content">
        <Link target="_blank" rel="noopener noreferrer" href={url} underline="none" color="neutral" disabled={!url} overlay>
          <Typography level="title-sm">{title}</Typography>
        </Link>
        <Tags tags={tags} />
      </div>
    </Card>
  );
}
