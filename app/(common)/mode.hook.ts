import { useColorScheme } from "@mui/joy";

export const useMode = () => {
  const { mode, systemMode } = useColorScheme();
  const { setMode } = useColorScheme();
  return { mode: mode === "system" ? systemMode : mode, setMode };
};
