"use client";
import { Button, ThemeProvider } from '@mui/material'
import { LightTheme } from '../themes/Light';

export default function Home() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Button>TESTE</Button>
    </ThemeProvider>
  )
}
