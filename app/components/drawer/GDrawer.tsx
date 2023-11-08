

'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Box, Drawer, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'; import { GItemList } from './GItemList';
import HomeIcon from '@mui/icons-material/Home';

interface GDrawerProps {
  children: ReactNode;
  open: boolean;
  toggleDrawer: () => void; // Adicione a propriedade 'toggleDrawer'
}



const drawerWidth = 240; // Largura do Drawer quando estiver aberto

export function GDrawer({ children, open, toggleDrawer }: GDrawerProps) { // Receba 'open' como uma prop
  const theme = useTheme();
  const inboxIconRef = useRef<HTMLDivElement>(null);
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
          <GItemList href="/" icon={<HomeIcon />} text="Home" open={open} inboxIconRef={inboxIconRef} />
          <GItemList href="#" icon={<AddToPhotosIcon />} text="Cadastros" open={open} inboxIconRef={inboxIconRef} />
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
