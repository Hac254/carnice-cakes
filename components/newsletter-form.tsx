"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const email = new FormData(e.currentTarget).get("email") as string

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      })
      e.currentTarget.reset()
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-4 sm:px-0">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="border-primary/20 focus-visible:ring-primary min-w-0"
      />
      <Button
        type="submit"
        className="w-full sm:w-auto whitespace-nowrap"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}

