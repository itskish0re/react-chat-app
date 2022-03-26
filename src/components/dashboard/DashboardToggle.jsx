import React, { useCallback } from 'react';
import { useModalState, useMediaQuery } from '../../misc/customhooks';
import { Button, Drawer, Notification, toaster } from 'rsuite';
import Dashboard from '.';
import {auth} from '../../misc/firebase';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery("(max-width: 992px)");

  const onSignOut = useCallback(() => {
    auth.signOut().then(() => {
      toaster.push(<Notification type='info' header="Signed out" duration={4000}/>,{
        placement: 'topCenter'
      })
    });
    close();
  },[close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        Dashboard
      </Button>
      <Drawer full={isMobile} open={isOpen} onClose={close} placement="left">
        <Dashboard onSignOut={onSignOut}/>
      </Drawer>
    </>
  );
};

export default DashboardToggle;
