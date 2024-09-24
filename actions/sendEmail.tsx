"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');  
  const message = formData.get('message');

  console.log("Attempting to send email...");

  if (!validateString(senderEmail, 500)) {
    console.log("Invalid sender email");
    return {
      error: 'Invalid sender Email'
    };
  }

  if (!validateString(message, 5000)) {
    console.log("Invalid message");
    return {
      error: 'Invalid message'
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "elmubaraqy10@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    console.log("Email sent successfully", data);
    return { data };
  } catch (error) {
    console.log("Error sending email:", error);
    return {
      error: getErrorMessage(error),
    };
  }
};
