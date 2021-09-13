import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Animals from "./Animals";
import Footer from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import Name from "./Name";
import SortList from "./SortList";

const App = () => {
  const [user, setUser] = useState({ name: "", animals: [] });

  const updateUser = (newData) => {
    setUser(({ name, animals }) => ({ name, animals, ...newData }));
  };

  return (
    <div className="container-fluid p-0">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/name" render={(props) => <Name {...props} updateUser={updateUser} user={user} />} />
        <Route path="/animals" render={(props) => <Animals {...props} updateUser={updateUser} user={user} />} />
        <Route path="/sort-list" render={(props) => <SortList {...props} user={user} />} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
