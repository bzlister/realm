"use client";

import * as React from "react";
import { IconButton, IconButtonProps, useColorScheme } from "@mui/joy";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./mode-toggle.css";

export default function ModeToggle(props: IconButtonProps) {
  const { onClick, sx, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="mode-toggle">
      <div className="placeholder" />
    </div>
  }
  return (
    <IconButton
      className="mode-toggle"
      data-screenshot="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      {...other}
      onClick={(event) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
      sx={[
        mode === "dark" ? { "& > *:first-child": { display: "none" } } : { "& > *:first-child": { display: "initial" } },
        mode === "light" ? { "& > *:last-child": { display: "none" } } : { "& > *:last-child": { display: "initial" } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DarkModeRoundedIcon />
      <LightModeIcon />
    </IconButton>
  );
}
