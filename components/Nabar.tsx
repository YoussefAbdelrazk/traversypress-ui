import Image from 'next/image';
import logo from '@/img/hospital-sign-of-letter-h-inside-circles.png';
import Link from 'next/link';
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
  return (
    <div className=' bg-primary dark:bg-slate-700 py-2 px-8  flex justify-between items-center text-white'>
      <Link href='/'>HAZO</Link>

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
          <DropdownMenuItem>
          <Link href='/auth'>
          Logout
          </Link>
          </DropdownMenuItem>
       
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
