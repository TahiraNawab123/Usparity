// hooks/use-toast.ts
import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState<any[]>([])

  const toast = ({ title, description }: { title: string; description: string }) => {
    console.log(`Toast: ${title} - ${description}`)
    // You can implement actual toast functionality here
  }

  return { toast, toasts }
}