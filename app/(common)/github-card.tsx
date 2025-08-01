import { Card, Link, SvgIcon, Typography } from "@mui/joy";
import "./github-card.css";

export default function GitHubCard({ name, maintainer, description }: { name: string; maintainer: string; description: string }) {
  const fullName = `${maintainer}/${name}`;
  const url = `https://github.com/${fullName}`;
  return (
    <Card className="github-card">
      <Link target="_blank" rel="noopener noreferrer" href={url} underline="none" color="neutral" disabled={!url} overlay></Link>
      <div className="github-card-title">
        <GitHubRepoIcon />
        <Typography level="title-md">{fullName}</Typography>
      </div>

      {description}
    </Card>
  );
}

function GitHubRepoIcon() {
  return (
    <SvgIcon className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
    </SvgIcon>
  );
}
