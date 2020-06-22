import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// temp database data
import db_data from "./temp_server/tempDB.json";

// components
import TopNav from "./components/TopNav/TopNav";

//config
import routes from "./config/routes";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});

  useEffect(() => {
    setPersonalInfo(db_data.personalMetaData);
    setEducationInfo(db_data.EducationMetaData);
  }, []);

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  return (
    <div className="App">
      <header>
        <TopNav personalInfo={personalInfo} />
      </header>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
