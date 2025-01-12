import { List, ListItem } from "@mui/joy";
import { ReactNode } from "react";

export default function TutoringDetails({ children }: { children: ReactNode | undefined }) {
  return (
    <div>
      <p>
        I offer private/group instruction in computer science and software development. I have over ten years of experience as a professional STEM educator.
      </p>
      <List size="sm" marker="circle">
        <ListItem>$115 / hour (private)</ListItem>
        <ListItem>$200 / hour (group)</ListItem>
        <ListItem>In-person or virtual</ListItem>
      </List>
      {children}
    </div>
  );
}
