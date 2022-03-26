import React from "react";
import { useModalState, useMediaQuery } from '../../misc/customhooks';
import { Button, Drawer } from 'rsuite';
import Dashboard from '.';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery("(max-width: 992px)");

  return (
    <>
      <Button block color="blue" onClick={open}>
        Dashboard
      </Button>
      <Drawer full={isMobile} open={isOpen} onClose={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
}

export default DashboardToggle;
