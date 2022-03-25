import React from "react";
import { useModalState } from '../../misc/customhooks';
import { Button, Drawer } from 'rsuite';
import Dashboard from '.';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();

  return (
    <>
      <Button block color="blue" onClick={open}>
        Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
}

export default DashboardToggle;
