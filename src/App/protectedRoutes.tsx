import { Redirect, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = {
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) {

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log('Authenticated changed');
    

  if (isAuthenticated) {
      console.log("Authenticated TRUE");     
    return <Route {...routeProps} />;
  } else {
    console.log("Authenticated FALSE");
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
}
