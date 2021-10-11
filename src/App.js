import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import ContactMe from "./components/ContactMe/ContactMe.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
import Resume from "./components/Resume/Resume.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path={["/", "/AboutMe"]}>
              <AboutMe />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route exact path="/ContactMe">
              <ContactMe />
            </Route>
            <Route exact path={"/Resume"}>
              <Resume />
            </Route>
          </Switch>
        </Router>
        <Footer />
    </>
  );
}

export default App;
