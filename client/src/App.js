import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import "./App.css";

const App = () => (<div className="container">
  <Router>
    
      <Nav />
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