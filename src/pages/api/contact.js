import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  console.log("[CONTACT] incoming:", { name, email, message });
  console.log("[CONTACT] env loaded:", {
    hasKey: !!process.env.RESEND_API_KEY,
    contactTo: process.env.CONTACT_TO,
  });

  if (!name || !email || !message) {
    console.log("[CONTACT] missing fields");
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO,
      subject: `New message from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
      reply_to: email,
    });

    console.log("[CONTACT] resend response:", data);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[CONTACT] resend error:", err);
    return res.status(500).json({ message: "Error sending email" });
  }
}
