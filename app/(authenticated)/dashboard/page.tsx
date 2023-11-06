'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppThemeContext } from '../../context/theme/useAppTheme';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Dashboard() {
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
      <Link href="/teste">
        <Button>teste</Button>
      </Link>
      <Link prefetch={false} passHref href="/">
        <Button>DASHBOARD</Button>
      </Link>
    </Box >
  );
}
