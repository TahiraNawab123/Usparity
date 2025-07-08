import { useToast as useUiToast } from "@/components/ui/use-toast";

export function useToast() {
  const { toast } = useUiToast();

  const showToast = ({
    title,
    description,
    variant = "default",
  }: {
    title?: string;
    description?: string;
    variant?: "default" | "destructive" | string;
  }) => {
    toast({
      title,
      description,
      variant,
    });
  };

  return { toast: showToast };
}
