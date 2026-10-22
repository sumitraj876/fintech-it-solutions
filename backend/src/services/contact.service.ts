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
  // 1. Send to Admin (You)
  const adminText = `New project inquiry from ${payload.name} (${payload.email})\n\nService: ${payload.service}\nMessage: ${payload.message}`;
  
  const adminHtml = `
    <div style="font-family:Inter,Arial,sans-serif;background:#08080B;color:#F4F4F5;padding:28px;border-radius:12px;max-width:640px">
      <p style="color:#FFE600;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 14px">New Inquiry</p>
      <h2 style="margin:0 0 20px;font-size:22px;font-weight:700">${escapeHtml(payload.name)}</h2>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || 'N/A')}</p>
      <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
      <p><strong>Preferred Contact:</strong> ${escapeHtml(payload.preferredContact || 'N/A')}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    </div>
  `;

  await sendMail({
    subject: `[New inquiry] ${payload.name} - ${payload.service}`,
    text: adminText,
    html: adminHtml,
    replyTo: payload.email,
  });

  // 2. Send Auto-Reply to Client
  const clientText = `Hi ${payload.name},\n\nThank you for reaching out to FINTECH IT SOLUTIONS. We have received your inquiry regarding "${payload.service}".\n\nOur team will review your message and get back to you within 24-48 hours.\n\nBest regards,\nSumit Kumar\nFounder & CEO\nFINTECH IT SOLUTIONS`;

  const clientHtml = `
    <div style="font-family:Inter,Arial,sans-serif;background:#08080B;color:#F4F4F5;padding:40px;border-radius:12px;max-width:600px;margin:0 auto">
      <div style="text-align:center;margin-bottom:30px">
        <h1 style="color:#FF168A;font-size:24px;margin:0">FINTECH IT SOLUTIONS</h1>
      </div>
      
      <h2 style="font-size:20px;margin:0 0 16px">Hi ${escapeHtml(payload.name)},</h2>
      
      <p style="color:#A0A0A8;line-height:1.6;margin:0 0 16px">
        Thank you for reaching out to us. We have successfully received your inquiry regarding <strong>${escapeHtml(payload.service)}</strong>.
      </p>
      
      <p style="color:#A0A0A8;line-height:1.6;margin:0 0 24px">
        Our team is currently reviewing your requirements. We will get back to you within <strong>24-48 hours</strong> with an honest assessment and next steps.
      </p>
      
      <div style="background:#17171F;border-left:4px solid #FFE600;padding:16px;margin:0 0 24px">
        <p style="margin:0;color:#F4F4F5;font-size:14px"><strong>Your Message:</strong></p>
        <p style="margin:8px 0 0;color:#A0A0A8;font-size:14px;white-space:pre-wrap">${escapeHtml(payload.message)}</p>
      </div>
      
      <p style="color:#A0A0A8;line-height:1.6;margin:0 0 32px">
        If you have any urgent questions, feel free to reply directly to this email.
      </p>
      
      <div style="border-top:1px solid #17171F;padding-top:20px;margin-top:30px">
        <p style="margin:0;color:#F4F4F5;font-size:14px"><strong>Sumit Kumar</strong></p>
        <p style="margin:4px 0 0;color:#A0A0A8;font-size:12px">Founder & CEO, FINTECH IT SOLUTIONS</p>
        <p style="margin:8px 0 0;color:#FF168A;font-size:12px">fintech.itsolutions26@gmail.com</p>
      </div>
    </div>
  `;

  await sendMail({
    subject: `We received your inquiry - FINTECH IT SOLUTIONS`,
    text: clientText,
    html: clientHtml,
    to: payload.email, // Send directly to the client
  });
}