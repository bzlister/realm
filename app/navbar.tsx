import Link from "next/link";
import { Button, ButtonGroup } from "@mui/joy";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ButtonGroup className="button-group" variant="plain" orientation="vertical">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
