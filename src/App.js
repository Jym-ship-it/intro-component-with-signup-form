import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </header>
      <Home />
    </Box>
  );
}

export default App;
