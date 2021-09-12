import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Animals from "./Animals";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import Name from "./Name";
import SortList from "./SortList";

const App = () => {
  const [user, setUser] = useState({ name: "", animals: [] });

  const updateUser = (newData) => {
    setUser(({ name, animals }) => ({ name, animals, ...newData }));
    console.log(user)
  };

  return (
    <div className="container-fluid">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/name"
          render={(props) => <Name {...props} updateUser={updateUser} user={user} />}
        />
        <Route
          path="/animals"
          render={(props) => <Animals {...props} updateUser={updateUser} user={user} />}
        />
        <Route path="/sort-list" component={SortList} />
      </Switch>
    </div>
  );
};
export default App;
