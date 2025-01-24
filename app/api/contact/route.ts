import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: { email: "noreply@carnicecakes.com", name: "Carnice Cakes Website" },
        to: [{ email: "carnicecakes@gmail.com", name: "Carnice Cakes" }],
        subject: "New Contact Form Submission",
        htmlContent: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

