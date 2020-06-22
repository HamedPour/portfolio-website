import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import TopNav from "./components/TopNav/TopNav";

// views
import Home from "./views/Home";
import About from "./views/About";
import Education from "./views/Education";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
      </Switch>
    </div>
  );
}

export default App;
