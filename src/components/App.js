import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Animals from "./Animals";
import Footer from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import Mobile from "./Mobile";
import Name from "./Name";
import SortList from "./SortList";

const App = () => {
  const [user, setUser] = useState({ name: "", animals: [] });

  const updateUser = (newData) => {
    setUser(({ name, animals }) => ({ name, animals, ...newData }));
  };

  return (
    <div className="container-fluid p-0">
      {window.screen.width < 1100 && <Redirect to="/mobile" />}
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/name" render={(props) => <Name {...props} updateUser={updateUser} user={user} />} />
        <Route path="/animals" render={(props) => <Animals {...props} updateUser={updateUser} user={user} />} />
        <Route path="/sort-list" render={(props) => <SortList {...props} user={user} />} />
        <Route path="/mobile" component={Mobile} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
