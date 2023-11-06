'use client'
import { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { GFooter } from './GFooter';
import { GSideNav } from './GSideNav';

interface GLayoutProps {
  children: ReactNode;
}

export function GLayout({ children }: GLayoutProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
      <GFooter open={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <GSideNav isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}>
        {children}
      </GSideNav>
    </Box>
  );
}
