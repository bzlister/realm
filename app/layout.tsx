import Navbar from "./navbar";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import ModeToggle from "./mode-toggle";

export const metadata = {
  title: "Ben Lister | Full-stack dev",
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
        <CssVarsProvider>
          <CssBaseline />
          <Navbar />
          <ModeToggle />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
