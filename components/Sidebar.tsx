import {  LayoutDashboard,Newspaper,Folders,CreditCard,Settings,User} from 'lucide-react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link'


export default function Sidebar() {
  return (
    <div>
      <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <LayoutDashboard />
        <Link href='/'>Dashboard</Link>
      </CommandItem>
      <CommandItem>
        <Newspaper />
        <Link href='/posts'>Posts</Link>
      </CommandItem>
      <CommandItem>
        <Folders />
        <Link href='#'>Categories</Link>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className=' mr-2 h-4 w-4'/>
        <span>Profile</span>
        <CommandShortcut>Ctrl+P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className=' mr-2 h-5 w-5'/>
        <span>Billing</span>
        <CommandShortcut>Ctrl+B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className=' mr-2 h-5 w-5'/>
        <span>Settings</span>
        <CommandShortcut>Ctrl+S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

    </div>
  )
}
