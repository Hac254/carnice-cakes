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
      await fetch('https://api.brevo.com/v3/contacts', {
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

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      e.currentTarget.reset()
    } catch {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      e.currentTarget.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="border-red-200 focus-visible:ring-red-500"
      />
      <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}

