import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home";
import Signin from "../pages/authentication/signin";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/signin" component={Signin} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default routes;
