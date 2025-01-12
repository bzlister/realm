import { List, ListItem } from "@mui/joy";
import { ReactNode } from "react";

export default function Freelancing({ children }: { children: ReactNode | undefined }) {
  return (
    <div>
      <p>
        I can improve the performance of your app or website, make responsive UIs, add accessibility support and more. Hire me to create something your
        customers will love.
      </p>
      <List size="sm" marker="circle">
        <ListItem>Free introductory call</ListItem>
        <ListItem>Pricing structure varies based on project scope.</ListItem>
      </List>
      {children}
    </div>
  );
}
