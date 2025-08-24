import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export const POST = async (request) => {
  try {
    const { name, email, message } = await request.json();
    const messageHtml = `
        <div>
            <h3>Name: ${name}</h3>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        </div>`;
    await resend.emails.send({
      from: "Portfolio <noreply@mhshuvo.com>",
      to: "contact@mhshuvo.com",
      subject: `A message from my portfolio!`,
      html: messageHtml,
    });
    return NextResponse.json("Message sent to admin email");
  } catch {
    return NextResponse.json("Something is wrong");
  }
};

export const GET = () => {
  return NextResponse.json("I am sending api");
};
