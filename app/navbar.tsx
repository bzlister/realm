"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useMode } from "./(common)/mode.hook";
import ModeToggle from "./mode-toggle";
import "./navbar.css";

export default function Navbar() {
  const router = useRouter();
  const { mode, setMode } = useMode();
  return (
    <div className="navbar">
      <ButtonGroup variant="plain" className="navbar-buttons">
        <Button onClick={() => router.push("/")}>Home</Button>
        <Dropdown>
          <MenuButton variant="plain">Services</MenuButton>
          <Menu variant="plain">
            <MenuItem onClick={() => router.push("/tutoring")}>Tutoring</MenuItem>
            <MenuItem onClick={() => router.push("/freelancing")}>Freelancing</MenuItem>
          </Menu>
        </Dropdown>
        <Button onClick={() => router.push("/contact")}>Contact</Button>
      </ButtonGroup>
      <ModeToggle />
    </div>
  );
}
