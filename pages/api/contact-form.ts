// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"; // Import nodemailer

const transporter = nodemailer.createTransport({
  // Set up your email transporter configuration
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("backend");
  console.log(req.body);

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Contact Form - Daniel Coder",
      text: `
      FROM: ${req.body.email}

      ${req.body.message}

      ${req.body.companyname && req.body.companyname}
      ${req.body.phonenumber && req.body.phonenumber}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200);
    res.json({ ok: true });
  } catch (e) {
    console.log("Failed to send email response:", e);
    res.status(400);
    res.json({ ok: false });
  }
}
