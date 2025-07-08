import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { BillingSection } from "@/components/dashboard/billing-section"

export const metadata = {
  title: "Billing - Usparity",
  description: "Manage your subscription, view invoices, and update payment methods.",
}

export default function BillingPage() {
  return (
    <DashboardLayout>
      <BillingSection />
    </DashboardLayout>
  )
}
