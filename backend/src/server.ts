import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express().use(express.json()).use(cors());

// config
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message, teamNumber } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    // Email to your team inbox
    const adminMessage = await transport.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `[Contact Form] ${subject}`,
      text: `
        New message from the contact form:

        Name: ${name}
        Email: ${email}
        FRC Team Number: ${teamNumber || "Not provided"}

        Subject: ${subject}

        Message:
        ${message}
            `.trim(),
      html: `
                <h2>New Contact Message</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>FRC Team Number:</b> ${teamNumber || "Not provided"}</p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
    });

    // Friendly thank-you message to user
    const thankYouMessage = await transport.sendMail({
      from: `"FRC 5431 Titan Robotics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out to us!",
      text: `
                Hi ${name},

                Thanks for reaching out to FRC Team 5431 – Titan Robotics!

                We got your message and someone from our team will get back to you soon. Here's what you sent us:

                Subject: ${subject}
                Message:
                ${message}

                Feel free to reach out again if you have more questions.

                Talk soon,
                The Titan Robotics Team
                    `.trim(),
      html: `
                <p>Hi ${name},</p>
                <p>Thanks for reaching out to <b>FRC Team 5431 – Titan Robotics</b>!</p>
                <p>We got your message and someone from our team will get back to you soon.</p>

                <hr>
                <p><b>Here's what you sent us:</b></p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b><br>${message.replace(/\n/g, "<br>")}</p>
                <hr>

                <p>Feel free to reply to this email if you have more questions or ideas.</p>
                <p>Talk soon!<br>The Titan Robotics Team</p>
            `,
    });

    console.log(
      "Emails sent:",
      adminMessage.messageId,
      thankYouMessage.messageId,
    );
    res.status(200).json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails." });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
