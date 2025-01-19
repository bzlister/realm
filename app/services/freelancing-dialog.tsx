import { Button, DialogContent, DialogTitle, List, ListItem, ModalDialog } from "@mui/joy";
import Link from "next/link";
import "./dialog.css";

export default function FreelancingDialog() {
  return (
    <ModalDialog className="dialog" variant="soft">
      <DialogTitle>Freelancing and consulting</DialogTitle>
      <DialogContent>
        <p>
          I can improve the performance of your app or website, make responsive UIs, add accessibility support and more. Let's build something your customers
          will love.
        </p>
        <List size="sm" marker="circle">
          <ListItem>Free introductory call</ListItem>
          <ListItem>Pricing structure varies based on project scope.</ListItem>
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
