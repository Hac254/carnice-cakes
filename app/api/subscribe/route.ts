import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        email,
        listIds: [Number.parseInt(process.env.BREVO_LIST_ID || "0", 10)],
        updateEnabled: true,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to subscribe")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

