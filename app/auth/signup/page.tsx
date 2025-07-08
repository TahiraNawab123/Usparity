"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleStep, setGoogleStep] = useState(0) // 0: initial, 1: email, 2: confirm, 3: complete
  const [googleEmail, setGoogleEmail] = useState("")
  const { signUp } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    if (!acceptTerms) {
      toast({
        title: "Terms required",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      await signUp(email, password, name)
      toast({
        title: "Account created!",
        description: "Welcome to Usparity. Your account has been created successfully.",
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: "There was an error creating your account. Please try again.",
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
          description: "Please enter your email address.",
          variant: "destructive",
        })
        return
      }
      setGoogleStep(2)
      return
    }

    if (googleStep === 2) {
      setLoading(true)
      try {
        // Simulate account creation process
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Create user session
        await signUp(googleEmail, "google_auth", "Google User")

        toast({
          title: "Welcome to Usparity!",
          description: "Your account has been created successfully with Google.",
        })
        router.push("/dashboard")
      } catch (error) {
        toast({
          title: "Sign up failed",
          description: "There was an error creating your account. Please try again.",
          variant: "destructive",
        })
        setGoogleStep(0)
        setGoogleEmail("")
      } finally {
        setLoading(false)
      }
    }
  }

  const resetGoogleFlow = () => {
    setGoogleStep(0)
    setGoogleEmail("")
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
            <CardTitle className="text-2xl font-bold">Usparity</CardTitle>
            <CardDescription>Create your account and start your digital journey</CardDescription>
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
                <h3 className="text-lg font-semibold mb-4">Continue with Google</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="googleEmail">Email Address</Label>
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
                <h3 className="text-lg font-semibold mb-4">Confirm Account Details</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 mb-2">Email:</p>
                  <p className="font-medium">{googleEmail}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleGoogleSignIn}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                  <Button onClick={resetGoogleFlow} variant="outline" className="bg-transparent">
                    Back
                  </Button>
                </div>
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
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
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
                        placeholder="Create a password"
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
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link href="/terms" className="text-purple-600 hover:text-purple-700">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-purple-600 hover:bg-purple-700" disabled={loading}>
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </>
            )}

            {googleStep === 0 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/signin" className="text-purple-600 hover:text-purple-700 font-medium">
                    Sign in
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
