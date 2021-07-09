import { Component } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useRouteMatch } from "react-router-dom";

export type ProtectedRouteProps = {
  children: any;
} & RouteProps;

export default function ProtectedRoute({
  children,
  ...routeProps
}: ProtectedRouteProps) {
  const match = useRouteMatch();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("Authenticated changed");

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
