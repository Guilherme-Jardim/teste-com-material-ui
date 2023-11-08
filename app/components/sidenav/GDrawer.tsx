'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Box, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, useTheme, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';

interface GDrawerProps {
  children: ReactNode
}

const drawerWidth = 240; // Largura do Drawer quando estiver aberto

export function GDrawer({ children }: GDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const inboxIconRef = useRef(null);
  const [iconWidth, setIconWidth] = useState(0);

  useEffect(() => {
    const inboxIconElement = inboxIconRef.current;
    if (inboxIconElement) {
      const inboxIconWidth = getComputedStyle(inboxIconElement).width;
      setIconWidth(parseInt(inboxIconWidth));
    }
  }, []);

  const handleToggleDrawer = () => {
    setOpen(!open); // Inverte o estado do Drawer
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label={open ? "close drawer" : "open drawer"} onClick={handleToggleDrawer} edge="start" sx={{ marginRight: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? `${drawerWidth}px` : `${iconWidth}px`,
            boxSizing: 'border-box',
            transition: 'width 0.2s', // Duração da transição
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: open ? 'end' : 'center', paddingTop: '100px' }}>
          <IconButton onClick={handleToggleDrawer}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton alignItems="center">
                <ListItemIcon ref={inboxIconRef}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton alignItems="center">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        paddingTop={10}
        height='100vh'
        sx={{
          marginLeft: open ? `calc(${drawerWidth}px + 10px)` : `calc(${iconWidth}px + 10px)`,
          transition: 'margin 0.2s', // Duração da transição
        }}
      >
        {children}
      </Box>

    </Box>
  );
}
