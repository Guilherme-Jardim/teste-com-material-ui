import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import { GLayout } from '../components/sidenav/GLayout';
import { GSideNav } from '../components/sidenav/GSideNav';
import { GFooter } from '../components/sidenav/GFooter';
import { useState } from 'react';
import { GDrawer } from '../components/sidenav/GDrawer';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <GDrawer>
            {children}
          </GDrawer>
        </ThemeRegistry>
      </body>
    </html>
  );
}