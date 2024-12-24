import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { EmailTemplate } from "../../../../emails/SupportEmailTemplate";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address format." },
        { status: 400 }
      );
    }

    const {  error } = await resend.emails.send({
      from: "pratyush <onboarding@resend.dev>",
      to: ["pratyushsingha83@gmail.com"],
      subject: "Support message from Git Code",
      react: await EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
        
      return NextResponse.json(
        {
          success: false,
          message: `Something went wrong while sending email : ${error}`,
        },
        { status: 501 }
      );
    }

    return NextResponse.json(
      { success: true, message: "I will get in touch with you soon :)" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Server error occurred : ${error}` },
      { status: 501 }
    );
  }
}
