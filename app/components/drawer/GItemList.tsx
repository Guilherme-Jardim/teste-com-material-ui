// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
// import { List, ListItem } from '@mui/material';
// import Link from 'next/link';
// import React from 'react';
// import { forwardRef, useState } from 'react';

// interface GMenuProps {
//   menu: string;
//   menutext: string;
//   menuicon: React.ReactNode;
//   hrefmenu: string;
//   submenus: {
//     submenu: string;
//     submenutext: string;
//     submenuicon: React.ReactNode;
//     hrefsubmenu: string;
//     subsubmenus: {
//       subsubmenu: string;
//       subsubmenutext: string;
//       subsubmenuicon: React.ReactNode;
//       hrefsubsubmenu: string;
//     }[];
//   }[];
// }

// export const GMenu = forwardRef(function GMenu(
//   { menu, menutext, menuicon, submenus, hrefmenu }: GMenuProps,
//   ref?: React.Ref<HTMLInputElement>
// ) {
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const [subsubmenuOpen, setSubsubmenuOpen] = useState<Record<number, boolean>>({});

//   const handleSubmenuClick = () => {
//     setSubmenuOpen(!submenuOpen);
//   };

//   const handleSubsubmenuClick = (index: number) => {
//     setSubsubmenuOpen((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <List>
//       <Link href={hrefmenu}>
//         <ListItemButton component="a" href={hrefmenu}>
//           <ListItemIcon>
//             {menuicon}
//           </ListItemIcon>
//           <ListItemText primary={menutext} />
//           {submenuOpen ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//       </Link>
//       <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
//         <List style={{ paddingLeft: '20px' }}>
//           {submenus.map((submenu, index) => (
//             <React.Fragment key={index}>
//               <Link href={submenu.hrefsubmenu}>
//                 <ListItemButton component="a" href={submenu.hrefsubmenu} onClick={() => handleSubsubmenuClick(index)} style={{ paddingLeft: '20px' }}>
//                   <ListItemIcon>
//                     {submenu.submenuicon}
//                   </ListItemIcon>
//                   <ListItemText primary={submenu.submenutext} />
//                   {subsubmenuOpen[index] ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//               </Link>
//               <Collapse in={subsubmenuOpen[index]} timeout="auto" unmountOnExit>
//                 <List style={{ paddingLeft: '20px' }}>
//                   {submenu.subsubmenus.map((subsubmenu, subIndex) => (
//                     <Link href={subsubmenu.hrefsubsubmenu} key={subIndex}>
//                       <ListItemButton component="a" href={subsubmenu.hrefsubsubmenu}>
//                         <ListItemIcon>
//                           {subsubmenu.subsubmenuicon}
//                         </ListItemIcon>
//                         <ListItemText primary={subsubmenu.subsubmenutext} />
//                       </ListItemButton>
//                     </Link>
//                   ))}
//                 </List>
//               </Collapse>
//             </React.Fragment>
//           ))}
//         </List>
//       </Collapse>
//     </List>
//   );
// });
















import React, { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { List, ListItem } from '@mui/material';
import Link from 'next/link';

interface GMenuProps {
  menu: string;
  menutext: string;
  menuicon: React.ReactNode;
  hrefmenu: string;
  submenus: {
    submenu: string;
    submenutext: string;
    submenuicon: React.ReactNode;
    hrefsubmenu: string;
    subsubmenus: {
      subsubmenu: string;
      subsubmenutext: string;
      subsubmenuicon: React.ReactNode;
      hrefsubsubmenu: string;
    }[];
  }[];
}






export function GMenu({ menu, menutext, menuicon, hrefmenu, submenus }: GMenuProps) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

  const handleSubmenuClick = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleSubsubmenuClick = () => {
    setSubsubmenuOpen(!subsubmenuOpen);
  };

  return (
    <>
      {/* Início do map do menu */}
      <Link href={hrefmenu}>
        <ListItem style={{ height: '50px' }} button onClick={handleSubmenuClick}>
          <ListItemIcon>
            {menuicon}
          </ListItemIcon>
          <ListItemText primary={menutext} />
          {submenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </Link>
      {/* Fim do map do menu */}
      <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ paddingLeft: '20px' }}>
          {/* Map do submenu */}
          {submenus.map((submenu, index) => (
            <React.Fragment key={index}>
              <Link href={submenu.hrefsubmenu}>
                <ListItem style={{ height: '50px' }} button onClick={handleSubsubmenuClick} sx={{ paddingLeft: '20px' }}>
                  <ListItemIcon>
                    {submenu.submenuicon}
                  </ListItemIcon>
                  <ListItemText primary={submenu.submenutext} />
                  {subsubmenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </Link>
              {/* Fim do map do submenu */}
              <Collapse in={subsubmenuOpen} timeout="auto" unmountOnExit>
                <List component="div" sx={{ paddingLeft: '20px' }}>
                  {/* Map do subsubmenu */}
                  {submenu.subsubmenus.map((subsubmenu, index) => (
                    <Link href={subsubmenu.hrefsubsubmenu} key={index}>
                      <ListItem style={{ height: '50px' }}>
                        <ListItemIcon>
                          {subsubmenu.subsubmenuicon}
                        </ListItemIcon>
                        <ListItemText primary={subsubmenu.subsubmenutext} />
                      </ListItem>
                    </Link>
                  ))}
                  {/* Fim do map do subsubmenu */}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </>
  );
}
