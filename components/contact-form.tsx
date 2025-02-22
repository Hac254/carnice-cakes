"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const formObject = Object.fromEntries(formData)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formObject
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
          variant: "default",
        })
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Error sending message:", error)
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full px-4 sm:px-0">
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
      <div className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name"
            required
            className="border-primary/20 focus-visible:ring-primary w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border-primary/20 focus-visible:ring-primary w-full"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            className="min-h-[150px] border-primary/20 focus-visible:ring-primary w-full"
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

