'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,

  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Calendar, ChevronDown, ChevronUp, CreditCard, Home, Inbox, LogOut, Plus, Projector, Search, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export default function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  return (

    <Sidebar collapsible="icon">
      <SidebarHeader >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="flex items-center gap-2">
                <Image src="/vercel.svg" alt="Logo" width={20} height={20} />
                <span className="font-bold">A10i</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu >
              {items.map((item) => {
                return <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild>
                    
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && <SidebarMenuBadge>24</SidebarMenuBadge>}
                </SidebarMenuItem>
              })}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup >
          <SidebarGroupLabel>Payments</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus className="h-3 w-3 " /><span className="sr-only">New Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent >

            <SidebarMenu >
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/payments" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    All Payments
                  </Link>
                </SidebarMenuButton>

              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <Plus className="ml-auto  group-data-[state=open]/collapsible:hidden" />
                <ChevronDown className="ml-auto  hidden group-data-[state=open]/collapsible:block" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarMenu >
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Projector className="h-4 w-4" />
                      All Projects
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="#" className="flex items-center gap-2">
                          <Plus className="h-4 w-4" />
                          Add Project
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarGroupContent />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter >
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Image id="logo" src="/vercel.svg" alt="Logo" width={20} height={20} />
                      <span className="font-bold">A10i</span>
                    </div>
                    <ChevronUp />
                  </div>

                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem><User /> Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
                <DropdownMenuItem><LogOut /> Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>


  )
}