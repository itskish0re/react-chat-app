import React from "react";
import { Routes, Route } from "react-router";
import "rsuite/dist/rsuite.min.css";
import "./styles/main.scss"
import SignIn from './pages/Signin';
import Home from './pages/Home';
import Redirect from './helperfunctions/Redirect';
import {ProfileProvider, useProfile} from './contexts/profile.context';
import { Container, Loader } from 'rsuite';


function App() {
  const {profile, isLoading} = useProfile();

  return (
    <ProfileProvider>
      <Routes>
        <Route path="/" element={
          (isLoading && !profile) ? (<Container>
            <Loader center vertical size="md" content="Loading" speed="slow"/>
          </Container>): (!profile && !isLoading) ? <Redirect to="/signin" /> : <Home/> } />
        <Route path="/signin" element={
          (isLoading && !profile) ? (<Container>
              <Loader center vertical size="md" content="Loading" speed="slow"/>
            </Container>): (profile && !isLoading) ? <Redirect to="/" /> : <SignIn/> } />
      </Routes>
    </ProfileProvider>
  );
}

export default App;
