'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Copyright(props: any) {
  return (
    <Typography align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function GLogin() {
  const { toggleTheme, themeName } = useAppThemeContext();
  const toggleButtonHandler = () => {
    toggleTheme();
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Link prefetch={false} passHref href='/dashboard' >
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Link>
          <Grid container>
            <Grid item xs>
              <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
                {"Don't have an account? Sign Up"}
              </Link>

            </Grid>

          </Grid>

        </Box>
        <IconButton sx={{ ml: 1 }} onClick={toggleButtonHandler} color="inherit">
          {themeName === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />

    </Container>
  );
}