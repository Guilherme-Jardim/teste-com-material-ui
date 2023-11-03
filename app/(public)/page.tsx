'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppThemeContext } from '../context/theme/useAppTheme';
import { darkTheme, lightTheme } from '../components/ThemeRegistry/theme';

export default function HomePage() {
  const { themeName, toggleTheme } = useAppThemeContext();

  const toggleButtonHandler = () => {
    toggleTheme(); // Chame a função toggleTheme para alternar o tema
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        onClick={toggleButtonHandler}
      >
        Trocar theme
      </Button>
    </Box >
  );
}
