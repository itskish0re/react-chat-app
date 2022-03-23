import React from 'react';
import { Route } from 'react-router-dom';
import Redirect from "../helperfunctions/Redirect"

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if(!profile){
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps} > {children} </Route>;

};

export default PrivateRoute;
