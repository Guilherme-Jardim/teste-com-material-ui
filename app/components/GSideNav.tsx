'use client';
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const GSideNav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const DRAWER_WIDTH = 240;

  return (
    <div>
      <Button className='' onClick={toggleDrawer}>
        <Menu /> Clique aqui
      </Button>
      <div>

        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              top: ['48px', '56px', '64px'],
              height: 'auto',
              bottom: 0,
            },
          }}
          anchor="left"
          open={open}
          onClose={toggleDrawer}
        >
          <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <ListItem button>
                <ListItemText primary="Item 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item 2" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
            <Button onClick={closeDrawer} variant="contained" color="primary">
              Fechar
            </Button>
          </div>
        </Drawer>
        <Button onClick={openDrawer} variant="contained" color="primary">
          Abrir
        </Button>
      </div>
    </div>
  );
};

