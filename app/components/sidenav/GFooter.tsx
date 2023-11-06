// GFooter.tsx
import React from 'react';
import { AppBar, IconButton, Toolbar, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface GFooterProps {
  open: boolean;
  onToggleDrawer: () => void; // Altere o nome da propriedade para onToggleDrawer
}

export function GFooter({ open, onToggleDrawer }: GFooterProps) {
  const theme = useTheme();

  const toggleDrawer = () => {
    onToggleDrawer(); // Chame onToggleDrawer ao invés de onClick
  };

  return (
    <AppBar position="fixed" sx={{ height: theme.spacing(8), zIndex: 2000 }}>
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
