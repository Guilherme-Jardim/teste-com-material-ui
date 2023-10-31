"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ToggleColorMode from '../components/ToggleColorMode';


export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ToggleColorMode />
    </Box>
  );
}