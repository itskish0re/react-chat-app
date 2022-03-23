import React from "react";
import { Routes, Route } from "react-router";
import "rsuite/dist/rsuite.min.css";
import "./styles/main.scss"
import SignIn from './pages/Signin';
import Home from './pages/Home';
import Redirect from './helperfunctions/Redirect';

const profile = false;

function App() {
  return (
    <Routes>
      <Route path="/" element={(!profile) ? <Redirect to="/signin" /> : <Home/> } />
      <Route path="/signin" element={(profile) ? <Redirect to="/" /> : <SignIn/> } />
    </Routes>
  );
}

export default App;
