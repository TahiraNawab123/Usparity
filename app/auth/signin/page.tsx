"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff, ArrowLeft, Shield, CheckCircle } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleStep, setGoogleStep] = useState(0) // 0: initial, 1: email, 2: verification, 3: complete
  const [googleEmail, setGoogleEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [userProfile, setUserProfile] = useState<{ name: string; email: string } | null>(null)
  const { signIn } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await signIn(email, password)
      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    if (googleStep === 0) {
      setGoogleStep(1)
      return
    }

    if (googleStep === 1) {
      if (!googleEmail) {
        toast({
          title: "Email required",
          description: "Please enter your Google email address.",
          variant: "destructive",
        })
        return
      }
      setGoogleStep(2)
      return
    }

    if (googleStep === 2) {
      if (!verificationCode) {
        toast({
          title: "Verification code required",
          description: "Please enter your Google verification code.",
          variant: "destructive",
        })
        return
      }

      // Simulate verification code check (in real app, this would be server-side)
      const correctCode = "123456" // Demo code
      if (verificationCode !== correctCode) {
        toast({
          title: "Invalid verification code",
          description: "The verification code you entered is incorrect. Please try again.",
          variant: "destructive",
        })
        return
      }

      setLoading(true)
      try {
        // Simulate authentication process
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Set user profile
        const profile = {
          name: googleEmail
            .split("@")[0]
            .replace(/[^a-zA-Z]/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          email: googleEmail,
        }
        setUserProfile(profile)

        // Create user session
        await signIn(googleEmail, "google_auth")

        toast({
          title: "Welcome to Usparity!",
          description: `Successfully signed in as ${profile.name}`,
        })

        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      } catch (error) {
        toast({
          title: "Sign in failed",
          description: "There was an error signing you in. Please try again.",
          variant: "destructive",
        })
        resetGoogleFlow()
      } finally {
        setLoading(false)
      }
    }
  }

  const resetGoogleFlow = () => {
    setGoogleStep(0)
    setGoogleEmail("")
    setVerificationCode("")
    setUserProfile(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Sign in to your Usparity account</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Google Sign In Flow */}
            {googleStep === 0 && (
              <Button
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full h-12 mb-6 border-gray-300 hover:bg-gray-50 bg-transparent"
                disabled={loading}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </Button>
            )}

            {googleStep === 1 && (
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Google Authentication</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="googleEmail">Google Email Address</Label>
                    <Input
                      id="googleEmail"
                      type="email"
                      placeholder="Enter your Google email"
                      value={googleEmail}
                      onChange={(e) => setGoogleEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleGoogleSignIn} className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Continue
                    </Button>
                    <Button onClick={resetGoogleFlow} variant="outline" className="bg-transparent">
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {googleStep === 2 && (
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold">Verification Required</h3>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-blue-800 mb-2">
                    We've sent a verification code to <strong>{googleEmail}</strong>
                  </p>
                  <p className="text-xs text-blue-600">
                    For demo purposes, use code: <strong>123456</strong>
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="verificationCode">6-Digit Verification Code</Label>
                    <Input
                      id="verificationCode"
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      maxLength={6}
                      className="h-12 text-center text-lg tracking-widest"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleGoogleSignIn}
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                      disabled={loading}
                    >
                      {loading ? "Verifying..." : "Verify & Sign In"}
                    </Button>
                    <Button onClick={resetGoogleFlow} variant="outline" className="bg-transparent">
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {userProfile && (
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-600">Authentication Successful</h3>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-green-800 mb-2">
                    Welcome back, <strong>{userProfile.name}</strong>!
                  </p>
                  <p className="text-xs text-green-600">{userProfile.email}</p>
                </div>
                <p className="text-sm text-gray-600 text-center">Redirecting to dashboard...</p>
              </div>
            )}

            {googleStep === 0 && (
              <>
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-12 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href="/auth/forgot-password" className="text-sm text-purple-600 hover:text-purple-700">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-purple-600 hover:bg-purple-700" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </>
            )}

            {googleStep === 0 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
