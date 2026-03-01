
'use client'
import React, { useState } from 'react'
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
function SideBarProvider({children}: {children: React.ReactNode}) {

      const [open, setOpen] = useState(false)

  return (
               <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar />
      <main className="w-full h-full flex flex-col ">
        <Navbar />
         {children}
       
      </main>
    </SidebarProvider>
  )
}

export default SideBarProvider