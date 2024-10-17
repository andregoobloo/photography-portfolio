import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

const mailOptions = {
  from: email,
  to: email,
};

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Photography Contact Form Submission",
      html: `<h2>Name</h2><p>${name}</><h2>Email</h2><p>${email}</p><h2>Message</h2><p>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error });
  }
}
