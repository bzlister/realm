"use client";

import { Button, IconButton } from "@mui/joy";
import { useMode } from "./(common)/mode.hook";

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>{mode === "dark" ? "D" : "L"}</Button>;
}
