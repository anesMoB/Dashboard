import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "../ui/button"
 
export function CustomTrigger() {
  const { toggleSidebar } = useSidebar()
 
  return <Button variant='outline' className="ms-1" onClick={toggleSidebar}>Toggle Sidebar</Button>
}
