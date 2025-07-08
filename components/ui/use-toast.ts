import { toast as sonnerToast } from "sonner"

type ToastOptions = {
  title?: string
  description?: string
  variant?: "default" | "destructive" | string
}

export function useToast() {
  const showToast = ({
    title,
    description,
    variant = "default",
  }: ToastOptions) => {
    sonnerToast(title ?? "", {
      description,
      // Variant is NOT passed to sonner directly
      // You handle variant in your UI, if needed
    })
  }

  return { toast: showToast }
}
