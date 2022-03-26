import React from 'react';
import {Drawer, Button} from 'rsuite';
import {useProfile} from '../../contexts/profile.context';

const Dashboard = ({onSignOut}) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
        <Drawer.Actions>
          <Button block color="red" onClick={onSignOut}>
            Log out
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
      </Drawer.Body>

    </>
  );
};

export default Dashboard;
