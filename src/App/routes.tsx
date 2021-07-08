import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Project from "../projects";
import Signin from "../pages/authentication/signin";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/signin" />
        <Route path="/signin" component={Signin} />
        <Route path="/project" component={Project} />
      </Switch>
    </Router>
  );
};

export default routes;
