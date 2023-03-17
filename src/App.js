import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Feed, Sidebar, Rightbar, Navbar } from "./components";
function App() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [mode, setMode] = useState("dark");
  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar showSidebar={toggleSidebar} />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar
            displaySidebar={displaySidebar}
            setThemeMode={() => {
              console.log("ddd");
              setMode(mode === "dark" ? "light" : "dark");
            }}
          />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
