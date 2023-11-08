

'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Box, Drawer, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Link from 'next/link';
interface GDrawerProps {
  children: ReactNode;
  open: boolean;
  toggleDrawer: () => void; // Adicione a propriedade 'toggleDrawer'
}

const options = [
  { text: 'Home', href: '/', icon: <InboxIcon /> },
  { text: 'Starred', href: '#', icon: <AcUnitIcon /> },
  { text: 'Send email', href: '#', icon: <MailIcon /> },
  { text: 'Drafts', href: '#', icon: <AccessAlarmIcon /> },
];

const drawerWidth = 200;

export function GDrawer({ children, open, toggleDrawer }: GDrawerProps) {
  const theme = useTheme();
  const inboxIconRef = useRef(null);
  const [iconWidth, setIconWidth] = useState(0);

  useEffect(() => {
    const inboxIconElement = inboxIconRef.current;
    if (inboxIconElement) {
      const inboxIconWidth = getComputedStyle(inboxIconElement).width;
      setIconWidth(parseInt(inboxIconWidth));
    }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? `${drawerWidth}px` : `${iconWidth}px`,
            boxSizing: 'border-box',
            transition: 'width 0.2s',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: open ? 'end' : 'center', paddingTop: '100px' }}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {options.map((option) => (
            <ListItem key={option.href} disablePadding>
              <Link style={{
                width: '100%', color: 'initial', textDecoration: 'none',
              }} href={option.href}>
                <ListItemButton alignItems="center">
                  <ListItemIcon ref={inboxIconRef}>
                    {option.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={option.text} />}
                </ListItemButton>
              </Link>
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
