'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { AppThemeProvider } from '@/app/context/theme/themeContext';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <AppThemeProvider>
        <CssBaseline />
        {children}
      </AppThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}