import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

export const runtime = 'nodejs';

type Payload = {
  method: 'email' | 'sms';
  to: string;
  subject?: string;
  message: string;
};

function getEmailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function getTwilioClient() {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;

  if (!sid || !token || !from) {
    return null;
  }

  return { client: twilio(sid, token), from };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Payload;

    if (!payload?.to || !payload?.message || !payload?.method) {
      return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
    }

    if (payload.method === 'email') {
      const transporter = getEmailTransporter();
      const from = process.env.SMTP_FROM;

      if (!transporter || !from) {
        return NextResponse.json({ error: 'Email provider not configured' }, { status: 400 });
      }

      await transporter.sendMail({
        from,
        to: payload.to,
        subject: payload.subject || 'HMC Maintenance Reminder',
        text: payload.message,
      });
    } else {
      const twilioConfig = getTwilioClient();
      if (!twilioConfig) {
        return NextResponse.json({ error: 'SMS provider not configured' }, { status: 400 });
      }

      await twilioConfig.client.messages.create({
        from: twilioConfig.from,
        to: payload.to,
        body: payload.message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Notification send error:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
