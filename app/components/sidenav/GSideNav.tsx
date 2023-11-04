'use client'
import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import { useMediaQuery } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface GSideNavProps {
  children: ReactNode;
}

export function GSideNav({ children }: GSideNavProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ height: theme.spacing(8), zIndex: 2000 }}>
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Drawer variant={smDown ? 'temporary' : 'persistent'} anchor="left" open={open} onClose={toggleDrawer}
          sx={{
            transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1)',
          }}
        >

          <Box display='flex' alignItems='center' justifyContent='flex-end' padding={theme.spacing(0, 1)}>
          </Box>
          <Box paddingTop={7} width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
            <Box width="100%" height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
              <Avatar
                sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                src='https://media.licdn.com/dms/image/C4D03AQGhWw72_nxcSQ/profile-displayphoto-shrink_200_200/0/1668042495028?e=1704326400&v=beta&t=g9Ar2RXpXV-gaIJ_6cvpLXirT9LtzO9k8Jz8HKy1J0s'
              />
            </Box>

            <Divider />

            <Box flex={1}>
              <List component="nav">
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Página Inicial" />
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Drawer>
        <Box
          paddingTop={10}
          height='100vh'
          sx={{
            marginLeft: open ? (smDown ? 2 : theme.spacing(30)) : 2,
            transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1)',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
