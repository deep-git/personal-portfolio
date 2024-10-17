import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();
        if (!name || !email || !subject || !message ||
            name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
            return NextResponse.json({ message: "All fields must be filled." }, { status: 400 });
        }

        await transporter.sendMail({
            ...mailOptions,
            subject: subject,
            text: message,
            html: `<h1>From: ${name}</h1><p>${email}</p><p>${message}</p>`
        });

        return NextResponse.json({ message: "Successful" }, { status: 200 });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Error processing request" }, { status: 500 });
    }
}