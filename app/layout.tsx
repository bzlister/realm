import Navbar from "./navbar";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import ModeProvider from "./mode-provider";

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
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
