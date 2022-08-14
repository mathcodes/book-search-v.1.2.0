import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => (<div className="container">
  <Router>
    
      <NavBar />
      <Hero />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
  
  </Router>  </div>
);

export default App;