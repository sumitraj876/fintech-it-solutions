/**
 * One-command SMTP test.
 *   npm run test:email
 *
 * Verifies credentials AND sends a real test message to MAIL_TO.
 * If this succeeds, the whole email pipeline works.
 */
import { env } from '../config/env.js';
import { sendMail, verifySmtp } from '../services/mailer.js';

async function main() {
  console.log('-> SMTP host:', env.SMTP_HOST);
  console.log('-> SMTP port:', env.SMTP_PORT);
  console.log('-> SMTP user:', env.SMTP_USER);
  console.log('-> Mail to:  ', env.MAIL_TO);
  console.log('');

  console.log('Step 1/2 - verifying SMTP credentials...');
  await verifySmtp();
  console.log('   [OK] credentials accepted');
  console.log('');

  console.log('Step 2/2 - sending a test message...');
  const stamp = new Date().toISOString();
  await sendMail({
    subject: `[FINTECH IT SOLUTIONS] SMTP test - ${stamp}`,
    text: [
      'This is a test message from the backend SMTP configuration.',
      '',
      `Sent at: ${stamp}`,
      '',
      'If you are reading this in the inbox of ' + env.MAIL_TO + ',',
      'then Nodemailer + Gmail SMTP is working end-to-end.',
      '',
      '- FINTECH IT SOLUTIONS backend',
    ].join('\n'),
    html: `
      <div style="font-family:Inter,Arial,sans-serif;background:#08080B;color:#F4F4F5;padding:24px;border-radius:12px">
        <p style="color:#FFE600;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px">
          FINTECH IT SOLUTIONS
        </p>
        <h2 style="margin:0 0 12px;font-size:20px">SMTP test passed.</h2>
        <p style="color:#A0A0A8;margin:0 0 12px">This message confirms the backend can send email through Gmail SMTP.</p>
        <p style="color:#A0A0A8;font-size:12px;margin:0">Sent at: ${stamp}</p>
      </div>
    `,
  });
  console.log('   [OK] message accepted by SMTP server');
  console.log('');
  console.log('Done. Check the inbox of ' + env.MAIL_TO + ' (and Spam).');
}

main().catch((err) => {
  console.error('');
  console.error('[FAIL] SMTP test FAILED:');
  console.error(err);
  process.exit(1);
});