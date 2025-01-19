import { Button, DialogContent, DialogTitle, List, ListItem, ModalDialog } from "@mui/joy";
import Link from "next/link";
import "./dialog.css";

export default function TutoringDialog() {
  return (
    <ModalDialog className="dialog" variant="soft">
      <DialogTitle>Need help preparing for your technical interview?</DialogTitle>
      <DialogContent>
        <p>10+ years of experience as a professional STEM educator. I offer private/group instruction in computer science and software development.</p>
        <List size="sm" marker="circle">
          <ListItem>$115 / hour (private)</ListItem>
          <ListItem>$200 / hour (group)</ListItem>
          <ListItem>In-person or virtual</ListItem>
        </List>
        <Link href="/contact">
          <Button variant="soft" sx={{ marginTop: "15px" }}>
            Contact me
          </Button>
        </Link>
      </DialogContent>
    </ModalDialog>
  );
}
