import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ApiResponse = {
  ok: boolean;
  message: string;
};

type LeadRequest = {
  name?: unknown;
  company?: unknown;
  trade?: unknown;
  serviceArea?: unknown;
  website?: unknown;
  phone?: unknown;
  email?: unknown;
  challenge?: unknown;
  companyFax?: unknown;
};

const textValue = (value: unknown) =>
  typeof value === "string" ? value.trim().slice(0, 3000) : "";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[character] as string)
  );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  const body = (req.body || {}) as LeadRequest;
  const lead = {
    name: textValue(body.name),
    company: textValue(body.company),
    trade: textValue(body.trade),
    serviceArea: textValue(body.serviceArea),
    website: textValue(body.website),
    phone: textValue(body.phone),
    email: textValue(body.email),
    challenge: textValue(body.challenge),
    companyFax: textValue(body.companyFax),
  };

  if (lead.companyFax) {
    return res.status(200).json({ ok: true, message: "Request received." });
  }

  if (
    !lead.name ||
    !lead.company ||
    !lead.trade ||
    !lead.serviceArea ||
    !lead.phone ||
    !lead.email ||
    !lead.challenge
  ) {
    return res
      .status(400)
      .json({ ok: false, message: "Please complete all required fields." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return res
      .status(400)
      .json({ ok: false, message: "Please enter a valid email address." });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    console.error("Contact form email environment variables are not configured.");
    return res.status(500).json({
      ok: false,
      message: "The contact form is temporarily unavailable.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "hotmail",
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  const rows = [
    ["Name", lead.name],
    ["Company", lead.company],
    ["Trade", lead.trade],
    ["Service area", lead.serviceArea],
    ["Website", lead.website || "Not provided"],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Biggest challenge", lead.challenge],
  ];

  try {
    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: lead.email,
      subject: `Free website review request — ${lead.company}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `
        <h1>New free website review request</h1>
        <table cellpadding="8" cellspacing="0" border="0">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><th align="left" valign="top">${escapeHtml(
                  label
                )}</th><td>${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`
            )
            .join("")}
        </table>
      `,
    });

    return res.status(200).json({ ok: true, message: "Request received." });
  } catch (error) {
    console.error("Contact form email failed.", error);
    return res.status(500).json({
      ok: false,
      message: "The contact form is temporarily unavailable.",
    });
  }
}
