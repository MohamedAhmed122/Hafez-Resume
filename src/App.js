import React from "react";
import theme from "./theme/theme";
import "./App.css";

import Navbar from "./Layout/Navbar";
import { ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/contactPage";
import DegreePage from "./Pages/degree";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/certificate' component={DegreePage} />
          DegreePage
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
