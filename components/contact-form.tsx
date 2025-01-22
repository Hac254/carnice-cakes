'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call without unused data variable
      await new Promise(resolve => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      })
      e.currentTarget.reset()
    } catch (error) { // Use a meaningful name for the error
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full px-4 sm:px-0">
      <div className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name"
            required
            className="border-red-200 focus-visible:ring-red-500 w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border-red-200 focus-visible:ring-red-500 w-full"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            className="min-h-[150px] border-red-200 focus-visible:ring-red-500 w-full"
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-red-600 hover:bg-red-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

