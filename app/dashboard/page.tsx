import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export const metadata = {
  title: "Dashboard - Usparity",
  description: "Manage your content requests and view your account details.",
}

export default function DashboardPage() {
  // In a real app, you'd check authentication here
  // if (!user) redirect('/auth/signin')

  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}
