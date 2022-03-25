import React from "react";
import { Routes, Route } from "react-router";
import "rsuite/dist/rsuite.min.css";
import "./styles/main.scss"
import SignIn from './pages/Signin';
import Home from './pages/Home';
import {ProfileProvider} from './contexts/profile.context';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <ProfileProvider>
      <Routes>
        <Route path="/signin" element={<PublicRoute children={<SignIn/>}/>}/>
        <Route path="/" element={<PrivateRoute children={<Home/>}/>}/>
      </Routes>
    </ProfileProvider>
  );
}

export default App;
