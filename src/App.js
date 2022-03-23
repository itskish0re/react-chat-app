import React from "react";
import { Routes } from "react-router";
import "rsuite/dist/styles/rsuite-default.css";
import "./styles/main.scss"
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/Signin';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <PublicRoute path="/signin">
        <SignIn/>
      </PublicRoute>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
    </Routes>
  );
}

export default App;
