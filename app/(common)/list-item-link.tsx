import { Link, ListItem } from "@mui/joy";
import { ReactNode } from "react";

export default function ListItemLink({ prefix, linkText, url }: { prefix: ReactNode; linkText: string; url: string }) {
  return (
    <ListItem>
      {prefix}
      <Link target="_blank" rel="noopener noreferrer" color="neutral" href={url}>
        {linkText}
      </Link>
    </ListItem>
  );
}
