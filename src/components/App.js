import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import { Fruits, Home, Mobile, Name } from "./routes";
import SortList from "./SortList";

const App = () => {
  const [user, setUser] = useState({ name: "", fruits: [] });

  const updateUser = (newData) => {
    setUser(({ name, fruits }) => ({ name, fruits, ...newData }));
  };

  return (
    <div className="container-fluid p-0">
      <GlobalStyle />
      {window.screen.width < 1100 && <Redirect to="/mobile" />}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/name"
          render={(props) => <Name {...props} updateUser={updateUser} user={user} />}
        />
        <Route
          path="/fruits"
          render={(props) => <Fruits {...props} updateUser={updateUser} user={user} />}
        />
        <Route path="/sort-list" render={(props) => <SortList {...props} user={user} />} />
        <Route path="/mobile" component={Mobile} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
