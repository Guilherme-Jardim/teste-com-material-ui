'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppThemeContext } from '../context/theme/useAppTheme';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  const { toggleTheme } = useAppThemeContext();

  const toggleButtonHandler = () => {
    toggleTheme();
  };

  return (
    <Box>
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
