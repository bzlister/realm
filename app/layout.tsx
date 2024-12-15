import { CssBaseline } from "@mui/joy";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import Navbar from "./navbar";
import ThemeProvider from "./theme-provider";
import "./layout.css";
import ModeToggle from "./mode-toggle";

export const metadata = {
  title: "Ben Lister | Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <InitColorSchemeScript defaultMode="system" />
        <ThemeProvider>
          <CssBaseline />
          <Navbar />
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
