import { ResetPasswordEmail } from '@/emails/react-email-starter/emails/reset-password-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
  username: string;
  fromEmail: string;
  userEmail: string;
  emailSubject: string;
  resetLink: string;
}

export async function sendEmail({
  username,
  fromEmail,
  userEmail,
  emailSubject,
  resetLink,
}: SendEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${fromEmail} <${fromEmail}>`,
      to: [userEmail],
      subject: emailSubject,
      react: ResetPasswordEmail({
        username: username,
        resetLink: resetLink,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
