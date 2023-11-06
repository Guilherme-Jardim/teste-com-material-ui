'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Teste1() {


  return (
    <Link prefetch={false} passHref href="/">
      <Button>teste1</Button>
    </Link>
  );
}
