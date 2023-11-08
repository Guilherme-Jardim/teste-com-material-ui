import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { List, ListItem, ListItemButton, Link, ListItemIcon, ListItemText } from '@mui/material';

interface GItemListProps {
  href: string;
  icon: ReactNode;
  text: string;
  open?: boolean;
  inboxIconRef?: React.RefObject<HTMLDivElement>; // Adicione a propriedade 'inboxIconRef' com o ponto de interrogação
}

export function GItemList({ href, icon, text, open, inboxIconRef }: GItemListProps) {
  const [iconWidth, setIconWidth] = useState(0);

  useEffect(() => {
    if (inboxIconRef) {
      const inboxIconElement = inboxIconRef.current;
      if (inboxIconElement) {
        const inboxIconWidth = getComputedStyle(inboxIconElement).width;
        setIconWidth(parseInt(inboxIconWidth));
      }
    }
  }, [inboxIconRef]);

  return (
    <ListItem disablePadding>
      <Link style={{
        width: '100%', color: 'initial', textDecoration: 'none',
      }} href={href}>
        <ListItemButton alignItems="center">
          <ListItemIcon ref={inboxIconRef}>
            {icon}
          </ListItemIcon>
          {open && <ListItemText primary={text} />}
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
