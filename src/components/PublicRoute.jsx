import React from 'react';
import { Navigate } from 'react-router';
import { useProfile } from '../contexts/profile.context';
import { Container, Loader } from 'rsuite';

const PublicRoute = ({ children }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if(profile && !isLoading){
    return <Navigate to="/" />;
  }

  return children;

};

export default PublicRoute;
