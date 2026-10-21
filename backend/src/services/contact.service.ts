import { sendMail } from './mailer.js';

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  preferredContact?: string;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const lines = [
    `New project inquiry via fintechitsolutions website`,
    ``,
    `Name:              ${payload.name}`,
    `Email:             ${payload.email}`,
    `Company:           ${payload.company || '(not provided)'}`,
    `Service required:  ${payload.service}`,
    `Preferred contact: ${payload.preferredContact || '(not provided)'}`,
    ``,
    `Message:`,
    payload.message,
  ];

  const text = lines.join('\n');

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:6px 12px 6px 0;color:#8A8A95;font-size:12px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
      <td style="padding:6px 0;color:#F4F4F5;font-size:14px">${escapeHtml(value)}</td>
    </tr>`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#08080B;color:#F4F4F5;padding:28px;border-radius:12px;max-width:640px">
      <p style="color:#FFE600;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 14px">
        FINTECH IT SOLUTIONS - New Inquiry
      </p>
      <h2 style="margin:0 0 20px;font-size:22px;font-weight:700">New project inquiry</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
        ${row('Name', payload.name)}
        ${row('Email', payload.email)}
        ${row('Company', payload.company || '(not provided)')}
        ${row('Service', payload.service)}
        ${row('Contact via', payload.preferredContact || '(not provided)')}
      </table>
      <div style="border-top:1px solid #17171F;padding-top:16px">
        <p style="color:#8A8A95;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Message</p>
        <p style="color:#F4F4F5;font-size:14px;line-height:1.6;white-space:pre-wrap;margin:0">${escapeHtml(payload.message)}</p>
      </div>
    </div>
  `;

  await sendMail({
    subject: `[New inquiry] ${payload.name} - ${payload.service}`,
    text,
    html,
    replyTo: payload.email,
  });
}