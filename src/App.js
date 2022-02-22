import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/features/Welcome";
import Login from "./components/full/Login";

function App() {
  const ProtectRoute = (props) => {
    return !sessionStorage.getItem("user") ? (
      <Redirect to="/" />
    ) : (
      <Route path={props.path}>{props.children}</Route>
    );
  };

  return (
    <>
      <Switch>
        <ProtectRoute path="/secured">
          <Welcome />
        </ProtectRoute>
        <Route path="/">
          <Login />
        </Route>
      </Switch>{" "}
    </>
  );
}

export default App;
