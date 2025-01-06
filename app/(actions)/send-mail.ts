"use server";

import nodemailer from "nodemailer";

export async function sendMail({ email, message }: { email: string; message: string }) {
  try {
    const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
    const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
    const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: SMTP_SERVER_HOST,
      port: 587,
      secure: true,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
    });
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Failed to authenticate", SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
      return false;
    }

    const info = await transporter.sendMail({
      from: email,
      to: "bzlister@gmail.com",
      subject: `New message from ${email}`,
      text: message,
    });

    console.log("Message Sent", info.messageId);
    return !!info.messageId;
  } catch (error) {
    console.error("Failed to send", error);
    return false;
  }
}
