import React from "react";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route} from "react-router-dom";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import { useMaterialUIController } from "context";
import SignUp from "pages/SignUp";

function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { direction, darkMode } = controller;

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <div className="App">
      <Router>
      <div>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
