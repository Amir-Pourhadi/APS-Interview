import { Route, Switch } from "react-router";
import { GlobalStyle } from "./GlobalStyle";
import SortList from "./SortList";

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route path="/sort-list" component={SortList} />
    </Switch>
  </>
);

export default App;
