import Message from "../models/Message.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // always your email
  replyTo: email, // 👈 lets you reply directly to the visitor
  to: process.env.EMAIL_USER, // you receive it
  subject: `New Contact Message from ${name}`,
  text: `
You have a new message from your portfolio site:

Name: ${name}
Email: ${email}

Message:
${message}
  `,
});


    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send message." });
  }
};
