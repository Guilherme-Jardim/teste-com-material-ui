import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Box, Drawer, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme, Collapse } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
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
          <ListItem disablePadding sx={{ height: '50px' }}>
            <Link href="/">
              <ListItemButton alignItems="center">
                <ListItemIcon ref={inboxIconRef}>
                  <MenuIcon />
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









// import React, { useState, useEffect, useRef, ReactNode } from 'react';
// import { Box, Drawer, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme, Collapse } from '@mui/material';
// import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import Link from 'next/link';
// import { GMenu } from './GItemList';

// interface GDrawerProps {
//   children: ReactNode;
//   open: boolean;
//   toggleDrawer: () => void;
// }


// const menus = [
//   {
//     menu: "Menu Principal",
//     menutext: "Ir para a Página Principal",
//     menuicon: <ExpandMore />, // Substitua isso pelo ícone real
//     hrefmenu: "#",
//     submenus: [
//       {
//         submenu: "Submenu 1",
//         submenutext: "Ir para Submenu 1",
//         submenuicon: <ExpandMore />, // Substitua pelo ícone real
//         hrefsubmenu: "#",
//         subsubmenus: [
//           {
//             subsubmenu: "Subsubmenu 1",
//             subsubmenutext: "Ir para Subsubmenu 1",
//             subsubmenuicon: <ExpandMore />, // Substitua pelo ícone real
//             hrefsubsubmenu: "#",
//           },
//         ],
//       },
//       // Adicione outros submenus, se necessário
//     ],

//   },
//   {
//     menu: "Menu Principal",
//     menutext: "Ir para a Página Principal",
//     menuicon: <ExpandMore />, // Substitua isso pelo ícone real
//     hrefmenu: "/pagina-principal",
//     submenus: [
//       {
//         submenu: "Submenu 1",
//         submenutext: "Ir para Submenu 1",
//         submenuicon: <ExpandMore />, // Substitua pelo ícone real
//         hrefsubmenu: "#",
//         subsubmenus: [
//           {
//             subsubmenu: "Subsubmenu 1",
//             subsubmenutext: "Ir para Subsubmenu 1",
//             subsubmenuicon: <ExpandMore />, // Substitua pelo ícone real
//             hrefsubsubmenu: "#",
//           },
//         ],
//       },
//       // Adicione outros submenus, se necessário
//     ],

//   },
//   // Adicione outros menus, se necessário
// ];


// const drawerWidth = 240;

// export function GDrawer({ children, open, toggleDrawer }: GDrawerProps) {
//   const theme = useTheme();
//   const inboxIconRef = useRef<HTMLDivElement>(null);
//   const [iconWidth, setIconWidth] = useState(0);
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

//   useEffect(() => {
//     const inboxIconElement = inboxIconRef.current;
//     if (inboxIconElement) {
//       const inboxIconWidth = getComputedStyle(inboxIconElement).width;
//       setIconWidth(parseInt(inboxIconWidth));
//     }
//   }, []);

//   const handleSubmenuClick = () => {
//     setSubmenuOpen(!submenuOpen);
//   };

//   const handleSubsubmenuClick = () => {
//     setSubsubmenuOpen(!subsubmenuOpen);
//   };

//   useEffect(() => {
//     if (!open) {
//       setSubmenuOpen(false);
//       setSubsubmenuOpen(false);
//     }
//   }, [open]);

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <Drawer
//         variant="permanent"
//         open={open}
//         sx={{
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: open ? `${drawerWidth}px` : `${iconWidth}px`,
//             boxSizing: 'border-box',
//             transition: 'width 0.2s',
//           },
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: open ? 'end' : 'center', paddingTop: '100px' }}>
//           <IconButton onClick={toggleDrawer}>
//             {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </Box>
//         <Divider />
//         <List>
//           <ListItem disablePadding>
//             <Link href="/">
//               <ListItemButton alignItems="center">
//                 <ListItemIcon ref={inboxIconRef}>
//                   <MenuIcon />
//                 </ListItemIcon>
//                 {open && <ListItemText primary="Home" />}
//               </ListItemButton>
//             </Link>
//           </ListItem>
//           <GMenu
//             menu={menus[0].menu}
//             menutext={menus[0].menutext}
//             menuicon={menus[0].menuicon}
//             hrefmenu={menus[0].hrefmenu}
//             submenus={menus[0].submenus}
//           />
//         </List>
//       </Drawer >

//       <Box
//         paddingTop={10}
//         height='100vh'
//         sx={{
//           marginLeft: open ? `calc(${drawerWidth}px + 10px)` : `calc(${iconWidth}px + 10px)`,
//           transition: 'margin 0.2s',
//         }}
//       >
//         {children}
//       </Box>
//     </Box >
//   );
// }
