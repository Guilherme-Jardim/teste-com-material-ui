'use client'
import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { GAppBar } from './GAppBar';
import { GDrawer } from '../drawer/GDrawer';

interface GLayoutProps {
  children: ReactNode;
}

export function GLayout({ children }: GLayoutProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <GAppBar open={isDrawerOpen} handleToggleDrawer={toggleDrawer} />
      <GDrawer open={isDrawerOpen} toggleDrawer={toggleDrawer}>
        {children}
      </GDrawer>
    </Box>
  );
}
