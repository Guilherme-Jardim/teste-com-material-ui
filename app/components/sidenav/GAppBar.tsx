'use client'
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, useTheme, Button } from '@mui/material'; // Importe 'useTheme' aqui
import { Menu as MenuIcon } from '@mui/icons-material';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface CustomAppBarProps {
  open: boolean;
  handleToggleDrawer: () => void;
}

export function GAppBar({ open, handleToggleDrawer }: CustomAppBarProps) {
  const theme = useTheme();
  const { toggleTheme, themeName } = useAppThemeContext();

  const toggleButtonHandler = () => {
    toggleTheme();
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label={open ? "close drawer" : "open drawer"} onClick={handleToggleDrawer} edge="start" sx={{ marginRight: 2 }}>
          <MenuIcon />
        </IconButton>
        <IconButton sx={{ ml: 1 }} onClick={toggleButtonHandler} color="inherit">
          {themeName === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
