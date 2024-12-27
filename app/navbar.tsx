"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import "./navbar.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar">
      <ButtonGroup variant="plain" orientation="vertical">
        <Button onClick={() => router.push("/")}>Home</Button>
        <Dropdown>
          <MenuButton variant="plain">Services</MenuButton>
          <Menu variant="plain" placement="right-end">
            <MenuItem onClick={() => router.push("/tutoring")}>Tutoring</MenuItem>
            <MenuItem onClick={() => router.push("/freelancing")}>Freelancing</MenuItem>
          </Menu>
        </Dropdown>
        <Button onClick={() => router.push("/contact")}>Contact</Button>
      </ButtonGroup>
    </div>
  );
}
