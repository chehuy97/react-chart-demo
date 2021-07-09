import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Project from "../projects";
import Signin from "../pages/authentication/signin";
import ProtectedRoute from './protectedRoutes'
import { useEffect } from "react";

const Routes = () => {

  const isLoggedin = !(localStorage.getItem('isAuthenticated') == '' || localStorage.getItem('isAuthenticated') == null)

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to={isLoggedin ? '/project' : '/signin'} />
        <Route path="/signin" component={Signin} />
        <ProtectedRoute path="/project">
              <Project />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
