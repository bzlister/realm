"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@mui/joy";
import "./navbar.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <ButtonGroup variant="plain" orientation="vertical">
        <Button onClick={() => router.push("/")}>Home</Button>
        <Button onClick={() => router.push("/services")}>Services</Button>
        <Button onClick={() => router.push("/contact")}>Contact</Button>
      </ButtonGroup>
    </div>
  );
}
