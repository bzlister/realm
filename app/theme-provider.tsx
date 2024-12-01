"use client";
import { CssVarsProvider, extendTheme } from "@mui/joy";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        attention: "#6e34eb",
      },
    },
    dark: {
      palette: {
        attention: "#32a8a4",
      },
    },
  },
});
export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
