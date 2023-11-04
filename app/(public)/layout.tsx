import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import { GSideNav } from '../components/sidenav/GSideNav';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <GSideNav>
            {children}
          </GSideNav>
        </ThemeRegistry>
      </body>
    </html>
  );
}