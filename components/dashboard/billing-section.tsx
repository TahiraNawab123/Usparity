"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Download, Calendar, DollarSign, AlertCircle, CheckCircle } from "lucide-react"

export function BillingSection() {
  const [loading, setLoading] = useState(false)

  const currentPlan = {
    name: "Pro",
    price: "$49",
    period: "month",
    status: "active",
    nextBilling: "2024-02-15",
    usage: {
      articles: { used: 12, total: 16 },
      percentage: 75,
    },
  }

  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-01-15",
      amount: "$49.00",
      status: "paid",
      description: "Pro Plan - Monthly",
    },
    {
      id: "INV-2023-012",
      date: "2023-12-15",
      amount: "$49.00",
      status: "paid",
      description: "Pro Plan - Monthly",
    },
    {
      id: "INV-2023-011",
      date: "2023-11-15",
      amount: "$49.00",
      status: "paid",
      description: "Pro Plan - Monthly",
    },
  ]

  const paymentMethods = [
    {
      id: "pm_1",
      type: "card",
      last4: "4242",
      brand: "visa",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
  ]

  const handleUpgradePlan = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Redirect to pricing page
      window.location.href = "/pricing"
    }, 1000)
  }

  const handleDownloadInvoice = (invoiceId: string) => {
    // Simulate invoice download
    console.log(`Downloading invoice ${invoiceId}`)
  }

  const handleUpdatePayment = () => {
    setLoading(true)
    // Simulate payment update
    setTimeout(() => {
      setLoading(false)
      alert("Payment method updated successfully!")
    }, 1500)
  }

  const handleCancelSubscription = () => {
    if (confirm("Are you sure you want to cancel your subscription?")) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        alert("Subscription cancelled. You'll retain access until your next billing date.")
      }, 1500)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Billing & Subscription</h1>
        <p className="mt-2 text-gray-600">Manage your subscription, view invoices, and update payment methods.</p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                Current Plan
                <Badge className="ml-2 bg-green-100 text-green-700 hover:bg-green-100">
                  {currentPlan.status === "active" ? "Active" : "Inactive"}
                </Badge>
              </CardTitle>
              <CardDescription>Your current subscription details</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {currentPlan.price}
                <span className="text-sm font-normal text-gray-500">/{currentPlan.period}</span>
              </div>
              <div className="text-sm text-gray-500">Next billing: {currentPlan.nextBilling}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Usage */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Articles Used This Month</span>
                <span>
                  {currentPlan.usage.articles.used} / {currentPlan.usage.articles.total}
                </span>
              </div>
              <Progress value={currentPlan.usage.percentage} className="h-2" />
              <div className="text-xs text-gray-500 mt-1">
                {currentPlan.usage.articles.total - currentPlan.usage.articles.used} articles remaining
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleUpgradePlan} disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                {loading ? "Processing..." : "Upgrade Plan"}
              </Button>
              <Button variant="outline" onClick={handleUpdatePayment} disabled={loading} className="bg-transparent">
                Update Payment Method
              </Button>
              <Button
                variant="outline"
                onClick={handleCancelSubscription}
                disabled={loading}
                className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              >
                Cancel Subscription
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Payment Methods
          </CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase">{method.brand}</span>
                  </div>
                  <div>
                    <div className="font-medium">•••• •••• •••• {method.last4}</div>
                    <div className="text-sm text-gray-500">
                      Expires {method.expiryMonth}/{method.expiryYear}
                    </div>
                  </div>
                  {method.isDefault && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      Default
                    </Badge>
                  )}
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Edit
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              Add New Payment Method
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Billing History
          </CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium">{invoice.description}</div>
                    <div className="text-sm text-gray-500">{invoice.date}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-medium">{invoice.amount}</div>
                    <div className="flex items-center text-sm">
                      {invoice.status === "paid" ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-green-600">Paid</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                          <span className="text-red-600">Unpaid</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadInvoice(invoice.id)}
                    className="bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Billing Information */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>Update your billing details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tax ID (optional)"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
                placeholder="Enter your billing address"
              />
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-purple-600 hover:bg-purple-700">Save Billing Information</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
