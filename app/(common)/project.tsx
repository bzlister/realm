import { Card, CardContent, CardOverflow, Link, Typography } from "@mui/joy";
import Image from "next/image";
import Tags from "./tags";
import "./project.css";

export default function Project({ title, img, alt, link, tags }: { title: string; img?: string; alt?: string; link?: string; tags: string[] }) {
  return (
    <Card className="project">
      <CardOverflow className="image-container">
        {img && alt ? <Image src={img} alt={alt} loading="lazy" fill /> : <div className="imageless-project" />}
      </CardOverflow>
      <div className="project-content">
        <Link target="_blank" rel="noopener noreferrer" href={link} underline="none" color="neutral" disabled={!link} overlay>
          <Typography level="title-sm">{title}</Typography>
        </Link>
        <Tags tags={tags} />
      </div>
    </Card>
  );
}
