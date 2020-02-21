import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./components/Lists";
import Learn from "./components/Learn";
import Search from "./components/Search";
import Practice from "./components/Practice";
import { StoreProvider } from "./utils/GlobalState";

function App() {

  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={Lists} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/practice" component={Practice} />
            <Route component={Home} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
