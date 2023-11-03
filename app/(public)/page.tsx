'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppThemeContext } from '../context/theme/useAppTheme';
import { darkTheme, lightTheme } from '../components/ThemeRegistry/theme';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  const { themeName, toggleTheme } = useAppThemeContext();

  const toggleButtonHandler = () => {
    toggleTheme(); // Chame a função toggleTheme para alternar o tema
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        variant='contained'
        onClick={toggleButtonHandler}
      >
        Trocar theme
        Trocar theme
      </Button>
      <Typography>teste</Typography>
    </Box >
  );
}
