import * as React from "react";
import { AppContextProvider } from "./contexts/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Projects } from "./pages/Projects";
import Welcome from "./pages/Welcome";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route exact path="/">
              <Projects />
            </Route>
            <Route exact path="/add-project">
              <AddProject />
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
