
import { LogOut, Settings, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ThemeToggleButton from "./Custom/ThemeToggleButton"
import { SidebarTrigger } from "./ui/sidebar"
import { CustomTrigger } from "./Custom/CustomTrigger"


function Navbar() {


  return (
    <nav className="sticky top-0 bg-background z-10 flex justify-between items-center ps-1 pe-8 py-4 w-full ">
      <SidebarTrigger  />
      {/* <CustomTrigger /> */}
      <div className="flex items-center gap-4">
        <h1 className="font-semibold">Dashboard</h1>
        <ThemeToggleButton />
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQGL3fWXCp5bDw/profile-displayphoto-scale_200_200/B4EZt2BZ5OJ0Ac-/0/1767211643099?e=2147483647&v=beta&t=_Il3LmS7GWtvg1d1GQBX_wEln7aDRQVB0gt7NjJLZew" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem><User /> Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive"><LogOut /> Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar