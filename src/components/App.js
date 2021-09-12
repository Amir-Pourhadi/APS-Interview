import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import SortList from "./SortList";

const App = () => (
  <div className="container-fluid">
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sort-list" component={SortList} />
    </Switch>
  </div>
);

export default App;
