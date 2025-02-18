import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/shared/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container mx-auto">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}