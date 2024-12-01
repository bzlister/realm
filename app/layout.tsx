import { CssBaseline } from "@mui/joy";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import Navbar from "./navbar";
import ThemeProvider from "./theme-provider";

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
        <ThemeProvider>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
