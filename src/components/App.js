import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import Animals from "./Animals";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import Name from "./Name";
import SortList from "./SortList";

const App = () => (
  <div className="container-fluid">
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/name" component={Name} />
      <Route path="/animals" component={Animals} />
      <Route path="/sort-list" component={SortList} />
    </Switch>
  </div>
);

export default App;
