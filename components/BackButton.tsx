


import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link';

interface BackButtonProps {
  text :string;
  link:string;
}
export default function BackButton({text,link}:BackButtonProps) {
  return (
    <Link href={link} className='text-gray-500 hover:underline flex items-center gap-2 mb-5 font-bold'>
      <ArrowLeftCircle size={18}/> 
      {text}
      
    </Link>
  )
}
