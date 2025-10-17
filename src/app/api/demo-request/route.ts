import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, companyName, message } = body;

    // Validate required fields
    if (!fullName || !email || !companyName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = {
      to: "dmistry@trustyourinbox.com",
      from: "demo-request@trustyourinbox.com", // Verified sender in SendGrid
      replyTo: email, // Reply to the person who submitted the form
      subject: `New Demo Request from ${fullName} - ${companyName}`,
      text: `
New Demo Request Received

Full Name: ${fullName}
Email: ${email}
Company Name: ${companyName}
${message ? `\nMessage:\n${message}` : ""}

---
Submitted from TrustYourInbox Website
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Demo Request Received</h2>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Full Name:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company Name:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td>
    </tr>
    ${
      message
        ? `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Message:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
    </tr>
    `
        : ""
    }
  </table>

  <p style="color: #666; font-size: 12px; margin-top: 30px;">
    Submitted from TrustYourInbox Website
  </p>
</div>
      `.trim(),
    };

    // Send email via SendGrid
    const response = await sgMail.send(emailContent);
    console.log("SendGrid success:", response[0]?.statusCode);

    return NextResponse.json(
      { message: "Demo request submitted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending demo request email:", error);
    console.error("Error details:", error.message);

    // Handle SendGrid specific errors
    if (error.response) {
      console.error(
        "SendGrid error body:",
        JSON.stringify(error.response.body, null, 2)
      );
      return NextResponse.json(
        {
          error: "Failed to send demo request. Please try again later.",
          details: error.response.body,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send demo request. Please try again later." },
      { status: 500 }
    );
  }
}
