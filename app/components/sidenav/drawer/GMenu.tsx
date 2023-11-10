import { useState, useEffect } from "react";
import { ListItem, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";

interface GMenuProps {
  open: boolean; // Adicionando a propriedade open
  handleToggleDrawer: () => void;
  menu: string;
  menutext: string;
  menuicon: React.ReactNode;
  menuhref: string;
  submenu: {
    subtext: string;
    subicon: React.ReactNode;
    subhref: string;
    subsubmenu: {
      subsubtext: string;
      subsubicon: React.ReactNode;
      subsubhref: string;
    };
  }[];
}

export function GMenu({ menu, menuhref, menuicon, menutext, submenu, handleToggleDrawer, open }: GMenuProps) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

  const handleSubmenuClick = () => {
    if (!open) {
      setSubmenuOpen(!submenuOpen);
    } else {
      setSubmenuOpen(!submenuOpen);
      setSubsubmenuOpen(false);
    }

    if (!submenuOpen) {
      setSubsubmenuOpen(false);
      if (!open) {
        handleToggleDrawer();
      }
    }
  };

  const handleSubsubmenuClick = () => {
    setSubsubmenuOpen(!subsubmenuOpen);
  };

  useEffect(() => {
    if (!open) {
      setSubmenuOpen(false);
      setSubsubmenuOpen(false);
    }
  }, [open, menuhref]);

  return (
    <>
      <Link href={menuhref}>
        <ListItem button onClick={handleSubmenuClick} sx={{ width: '100%', height: '50px' }}> {/* Estilização do ListItem */}
          <ListItemIcon>{menuicon}</ListItemIcon>
          <ListItemText primary={menutext} />
          {submenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </Link>
      <Collapse sx={{ width: '100%' }} in={submenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{}}>
          {submenu.map((subItem, index) => (
            <Link key={index} href={subItem.subhref}>
              <ListItem button onClick={handleSubsubmenuClick} sx={{ width: '100%', paddingLeft: '40px', height: '50px' }}> {/* Estilização do ListItem */}
                <ListItemIcon>{subItem.subicon}</ListItemIcon>
                <ListItemText primary={subItem.subtext} />
                {subsubmenuOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Link>
          ))}
          <Collapse sx={{ width: '100%' }} in={subsubmenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding >
              {submenu.map((subItem, index) => (
                <Link key={index} href={subItem.subsubmenu.subsubhref}>
                  <ListItem button sx={{ width: '100%', paddingLeft: '60px', height: '50px' }}> {/* Estilização do ListItem */}
                    <ListItemIcon>{subItem.subsubmenu.subsubicon}</ListItemIcon>
                    <ListItemText primary={subItem.subsubmenu.subsubtext} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>
        </List>
      </Collapse>
    </>
  );
}
