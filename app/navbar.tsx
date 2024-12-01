"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useState, useRef } from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <link rel="stylesheet" href="/styles/navbar.css" />
      <ButtonGroup variant="plain" className="navbar">
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
    </>
  );
}
