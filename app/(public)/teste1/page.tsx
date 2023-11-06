'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Teste() {


  return (
    <Link prefetch={false} passHref href="/dashboard">
      <Button>teste</Button>
    </Link>
  );
}
