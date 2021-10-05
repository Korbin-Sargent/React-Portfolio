import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <switch>
          <Route exact path={["/", "/AboutMe", "/Home"]}>
            <AboutMe />
          </Route>
          <Route exact path="/Work">
            <Work />
          </Route>
          <Route exact path="/ContactMe">
            <ContactMe />
          </Route>
          <Route exact path={"/Resume"}>
            <Resume />
          </Route>
        </switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
