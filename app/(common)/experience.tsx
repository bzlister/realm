"use client";

import { PropsWithChildren, useState } from "react";
import { Card, IconButton, Typography } from "@mui/joy";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import "./experience.css";

export type ExperienceProps = {
  title: string;
  startYear: string;
  defaultExpanded?: boolean;
  endYear?: string;
};

export default function Experience(props: PropsWithChildren<ExperienceProps>) {
  const { title, startYear, endYear, defaultExpanded, children } = props;
  const [expanded, setExpanded] = useState(defaultExpanded ?? false);

  return (
    <Card className="experience-card">
      <div className="top-bar">
        <div className="title">
          <Typography level="title-lg">{title}</Typography>
          <span>{endYear ? `${startYear} - ${endYear}` : startYear}</span>
        </div>
        <IconButton aria-label={expanded ? "Collapse" : "Expand"} onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </div>
      {expanded && <div className="experience-content">{children}</div>}
    </Card>
  );
}
