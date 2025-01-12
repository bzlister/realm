import { List, ListItem } from "@mui/joy";
import { ReactNode } from "react";

export default function Freelancing({ children }: { children: ReactNode | undefined }) {
  return (
    <div>
      <p>Hire me to create something your customers will love. I also offer debugging and performance tuning services.</p>
      <List size="sm" marker="circle">
        <ListItem>Free introductory call</ListItem>
        <ListItem>Pricing structure varies based on project scope.</ListItem>
      </List>
      {children}
    </div>
  );
}
