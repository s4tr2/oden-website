import { NextRequest, NextResponse } from "next/server"

// Template file paths mapping
const TEMPLATE_FILES: Record<string, string> = {
  "win-loss-analysis-template": "/templates/win-loss-analysis-template.xlsx",
  "battle-card-template": "/templates/battle-card-template.xlsx",
  "competitive-intelligence-tracker": "/templates/competitive-intelligence-tracker.xlsx",
  "product-launch-checklist-template": "/templates/product-launch-checklist-template.xlsx",
  "gtm-plan-template": "/templates/gtm-plan-template.xlsx",
  "gtm-roadmap-template": "/templates/gtm-roadmap-template.xlsx",
  "messaging-framework-template": "/templates/messaging-framework-template.xlsx",
  "customer-story-template": "/templates/customer-story-template.xlsx",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, templateSlug } = body

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate template slug
    if (!templateSlug || typeof templateSlug !== "string") {
      return NextResponse.json(
        { error: "Template slug is required" },
        { status: 400 }
      )
    }

    // Get the template file path
    const templateFile = TEMPLATE_FILES[templateSlug]
    if (!templateFile) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      )
    }

    // TODO: In production, you would:
    // 1. Store the email in your database/CRM
    // 2. Send a confirmation email
    // 3. Track the download analytics
    // 4. Possibly generate a signed URL for the file
    
    console.log(`Template download requested: ${templateSlug} by ${email}`)

    // Return the download URL
    return NextResponse.json({
      success: true,
      downloadUrl: templateFile,
    })
  } catch (error) {
    console.error("Template download error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
