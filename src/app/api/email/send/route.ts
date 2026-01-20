
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { to, subject, html } = body;

        // Check if SMTP credentials are configured
        if (!process.env.SMTP_HOST) {
            console.log('---------------------------------------------------');
            console.log('📧 [MOCK EMAIL SERVICE] - No SMTP Configured');
            console.log(`To: ${to}`);
            console.log(`Subject: ${subject}`);
            console.log('---------------------------------------------------');
            return NextResponse.json({ success: true, message: 'Email logged (Mock)' });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: '"HMC Fleet Commander" <no-reply@hamad.qa>',
            to,
            subject,
            html,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
