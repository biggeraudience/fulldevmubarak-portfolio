// app/api/send-email/route.ts (or .js)

import { Resend } from "resend";
import { NextResponse } from 'next/server';
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return NextResponse.json({ error: 'Invalid sender email' }, { status: 400 });
  }

  if (!validateString(message, 5000)) {
    return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "elmubaraqy10@gmail.com", // Your email
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    
    return NextResponse.json({ data }, { status: 200 });

  } catch (error: unknown) {
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}
