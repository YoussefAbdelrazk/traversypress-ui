'use client';

import { logout } from '@/lib/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Darkmode } from './Darkmode';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Nabar() {




  const handleLogout = () => {
    logout();
  };


  return (
    <div className=' bg-primary dark:bg-slate-700 py-2 px-8  flex justify-between items-center text-white'>
      <Link href='/'>HAZO</Link>

      <div className='flex items-center justify-center space-x-3'>
        <Darkmode/>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback className='text-black'>BT</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href='/profile'>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
}
