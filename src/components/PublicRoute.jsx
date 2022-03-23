import React from 'react';
import { Route } from 'react-router-dom';
import Redirect from '../helperfunctions/Redirect';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if(profile){
    return <Redirect to="/" />;
  }

  return <Route {...routeProps} > {children} </Route>;

};

export default PublicRoute;
