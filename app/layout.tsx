import { CssBaseline } from "@mui/joy";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import Navbar from "./navbar";
import ThemeProvider from "./theme-provider";
import ModeToggle from "./mode-toggle";
import "./layout.css";

export const metadata = {
  title: "Ben Lister | Dev portfolio",
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
