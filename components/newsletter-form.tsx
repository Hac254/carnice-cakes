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

    const email = new FormData(e.currentTarget).get('email') as string

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY || ''
        },
        body: JSON.stringify({
          email,
          listIds: [2], // Update this with your actual list ID
          updateEnabled: true
        })
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      })
      e.currentTarget.reset()
    } catch (error) {
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
        className="border-red-200 focus-visible:ring-red-500 min-w-0"
      />
      <Button 
        type="submit" 
        className="bg-red-600 hover:bg-red-700 w-full sm:w-auto whitespace-nowrap" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}

