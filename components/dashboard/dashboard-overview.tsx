import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Clock,
  CheckCircle,
  TrendingUp,
  Plus,
  Calendar,
  User,
  Eye,
  Settings,
  CreditCard,
  BookOpen,
  UserCircle,
  Bell,
  Download,
  Edit3,
  Trash2,
} from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      name: "Articles This Month",
      value: "12",
      change: "+2 from last month",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      name: "In Progress",
      value: "3",
      change: "Expected delivery: 2 days",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      name: "Completed",
      value: "47",
      change: "+8 this month",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      name: "Total Views",
      value: "24.5K",
      change: "+12% from last month",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentArticles = [
    {
      title: "The Future of AI in Content Marketing",
      status: "completed",
      date: "2024-01-15",
      views: 1250,
      category: "Technology",
    },
    {
      title: "SEO Best Practices for 2024",
      status: "in-progress",
      date: "2024-01-18",
      views: 0,
      category: "SEO",
    },
    {
      title: "Building Brand Authority Through Content",
      status: "completed",
      date: "2024-01-12",
      views: 890,
      category: "Branding",
    },
    {
      title: "Social Media Content Strategy Guide",
      status: "review",
      date: "2024-01-16",
      views: 0,
      category: "Social Media",
    },
  ]

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    plan: "Professional",
    joinDate: "January 2024",
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">In Progress</Badge>
      case "review":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Under Review</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Header with Profile */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
            <AvatarFallback className="bg-purple-600 text-white text-lg">
              {userProfile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userProfile.name}!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your content today.</p>
            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <CreditCard className="w-4 h-4 mr-1" />
                {userProfile.plan} Plan
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Member since {userProfile.joinDate}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            New Request
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="articles" className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center">
            <UserCircle className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Plan Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Usage</CardTitle>
              <CardDescription>Your current plan usage for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Articles Used</span>
                    <span>12 / 16</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>4 articles remaining this month</span>
                  <Button variant="outline" size="sm">
                    Upgrade Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Plus className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Request New Content</h3>
                <p className="text-sm text-gray-600">Submit a new content request with your requirements</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">View All Content</h3>
                <p className="text-sm text-gray-600">Browse your complete content library and history</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">View Analytics</h3>
                <p className="text-sm text-gray-600">Track performance and engagement metrics</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="articles" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>My Articles</CardTitle>
                  <CardDescription>Manage your content requests and published articles</CardDescription>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Article
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.category}
                        </div>
                        {article.views > 0 && (
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {article.views.toLocaleString()} views
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusBadge(article.status)}
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                    <AvatarFallback className="bg-purple-600 text-white text-xl">
                      {userProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{userProfile.name}</h3>
                    <p className="text-gray-600">{userProfile.email}</p>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      Change Photo
                    </Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      defaultValue={userProfile.name}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      defaultValue={userProfile.email}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription Details</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-purple-900">{userProfile.plan} Plan</span>
                    <Badge className="bg-purple-600 text-white">Active</Badge>
                  </div>
                  <p className="text-sm text-purple-700">16 articles per month</p>
                  <p className="text-sm text-purple-700">Priority support included</p>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full bg-transparent">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Manage Billing
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive updates via email</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Article Completion</p>
                    <p className="text-sm text-gray-600">Notify when articles are ready</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Monthly Reports</p>
                    <p className="text-sm text-gray-600">Receive monthly analytics</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full bg-transparent">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
