import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Box, Drawer, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home'; import Link from 'next/link';
import { GMenu } from './GMenu';


const menus = [
  {
    menu: "Menu 1",
    menutext: "Menu Text 1",
    menuicon: <MenuIcon />,
    menuhref: "#",
    submenu: [
      {
        subtext: "Submenu 1-1",
        subicon: <MenuIcon />,
        subhref: "#",
        subsubmenu: {
          subsubtext: "Subsubmenu 1-1-1",
          subsubicon: <MenuIcon />,
          subsubhref: "#",
        },
      },
      // Outros itens de submenu, se houver...
    ],
  },
  {
    menu: "Menu 2",
    menutext: "Menu Text 2",
    menuicon: <MenuIcon />,
    menuhref: "#",
    submenu: [
      {
        subtext: "Submenu 2-1",
        subicon: <MenuIcon />,
        subhref: "#",
        subsubmenu: {
          subsubtext: "Subsubmenu 2-1-1",
          subsubicon: <MenuIcon />,
          subsubhref: "#",
        },
      },
      // Outros itens de submenu, se houver...
    ],
  },
  {
    menu: "Menu 3",
    menutext: "Menu Text 3",
    menuicon: <MenuIcon />,
    menuhref: "#",
    submenu: [
      {
        subtext: "Submenu 3-1",
        subicon: <MenuIcon />,
        subhref: "#",
        subsubmenu: {
          subsubtext: "Subsubmenu 3-1-1",
          subsubicon: <MenuIcon />,
          subsubhref: "#",
        },
      },
      // Outros itens de submenu, se houver...
    ],
  },
];




interface GDrawerProps {
  children: ReactNode;
  open: boolean;
  toggleDrawer: () => void;
}

const drawerWidth = 260;

export function GDrawer({ children, open, toggleDrawer }: GDrawerProps) {
  const theme = useTheme();
  const inboxIconRef = useRef<HTMLDivElement>(null);
  const [iconWidth, setIconWidth] = useState(0);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

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
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: '5px',
              height: '5px',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 3px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 3px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'gray',
              borderRadius: '10px',
            },
          },
        }}
      >

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: open ? 'end' : 'center', paddingTop: '70px' }}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List >
          <ListItem disablePadding >
            <Link style={{ width: '100%', height: '50px', maxHeight: '50px', minHeight: '50px', textDecoration: 'none', color: 'initial' }} href="/">
              <ListItemButton alignItems="center">
                <ListItemIcon ref={inboxIconRef}>
                  <HomeIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Home" />}
              </ListItemButton>
            </Link>
          </ListItem>
          {menus.map((menu, index) => (
            <GMenu
              key={index}
              menu={menu.menu}
              menutext={menu.menutext}
              menuicon={menu.menuicon}
              menuhref={menu.menuhref}
              submenu={menu.submenu}
              handleToggleDrawer={toggleDrawer}
              open={open}
            />
          ))}
        </List>
      </Drawer>

      <Box
        paddingTop={10}
        height='100vh'
        sx={{
          marginLeft: open ? `calc(${drawerWidth}px + 10px)` : `calc(${iconWidth}px + 10px)`,
          transition: 'margin 0.2s',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
