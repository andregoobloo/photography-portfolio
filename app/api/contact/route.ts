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
  console.log(`name: ${name}, email: ${email}, message: ${message}`);
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Photography website contact form",
      html: `<p>${name}</><p>${email}</p><p>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error });
  }
  // return NextResponse.json({ name: "Andre" });
}
