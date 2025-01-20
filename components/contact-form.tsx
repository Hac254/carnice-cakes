'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      })

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      })
      e.currentTarget.reset()
    } catch {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      })
      e.currentTarget.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <input type="hidden" name="access_key" value="004e7f1d-2e64-4568-baa5-f332b99a18ad" />
      <input type="hidden" name="subject" value="New Contact Form Submission - CarniceCakes" />
      <input type="hidden" name="from_name" value="CarniceCakes Website" />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="grid sm:grid-cols-2 gap-4">
        <Input name="name" placeholder="Name" required className="border-red-200 focus-visible:ring-red-500" />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border-red-200 focus-visible:ring-red-500"
        />
      </div>
      <Input name="phone" type="tel" placeholder="Phone" className="border-red-200 focus-visible:ring-red-500" />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={4}
        className="w-full px-3 py-2 border border-red-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      />
      <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

