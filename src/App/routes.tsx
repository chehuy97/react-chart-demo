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

  const isLoggedin = !(localStorage.getItem('username') == '' || localStorage.getItem('username') == null)

  useEffect(() => {
    let check = localStorage.getItem('username')
    console.log(check);
    
  })

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to={isLoggedin ? '/project' : '/signin'} />
        <Route path="/signin" component={Signin} />
        <ProtectedRoute authenticationPath='/signin'  component={Project}/>
      </Switch>
    </Router>
  );
};

export default Routes;
