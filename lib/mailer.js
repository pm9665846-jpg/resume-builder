import nodemailer from 'nodemailer'

// Create transporter — Gmail SMTP
function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
}

export async function sendPasswordResetOTP(email, otp, name) {
  const transporter = getTransporter()

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="margin:0;padding:0;background:#050508;font-family:'Inter',Arial,sans-serif;">
      <div style="max-width:480px;margin:40px auto;background:#0f0f1a;border:1px solid rgba(139,92,246,0.3);border-radius:16px;overflow:hidden;">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#8b5cf6,#3b82f6);padding:32px 32px 24px;text-align:center;">
          <div style="width:48px;height:48px;background:rgba(255,255,255,0.2);border-radius:12px;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;">
            <span style="font-size:24px;">⚡</span>
          </div>
          <h1 style="color:white;font-size:22px;font-weight:800;margin:0;letter-spacing:-0.02em;">Resume Maker</h1>
        </div>

        <!-- Body -->
        <div style="padding:32px;">
          <h2 style="color:white;font-size:18px;font-weight:700;margin:0 0 8px;">Reset Your Password</h2>
          <p style="color:#94a3b8;font-size:14px;line-height:1.6;margin:0 0 24px;">
            Hi ${name || 'there'}, we received a request to reset your password. Use the OTP below — it expires in <strong style="color:white;">15 minutes</strong>.
          </p>

          <!-- OTP Box -->
          <div style="background:#1e1e2e;border:2px solid rgba(139,92,246,0.4);border-radius:12px;padding:24px;text-align:center;margin:0 0 24px;">
            <p style="color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;">Your OTP Code</p>
            <div style="font-size:40px;font-weight:900;letter-spacing:12px;color:#a78bfa;font-family:monospace;">${otp}</div>
            <p style="color:#475569;font-size:11px;margin:8px 0 0;">Valid for 15 minutes only</p>
          </div>

          <p style="color:#64748b;font-size:13px;line-height:1.6;margin:0 0 16px;">
            If you didn't request this, you can safely ignore this email. Your password won't change.
          </p>

          <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:16px;margin-top:8px;">
            <p style="color:#334155;font-size:12px;margin:0;text-align:center;">
              © 2026 Resume Maker · Made with ❤️ for job seekers
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  await transporter.sendMail({
    from: `"Resume Maker" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: `${otp} — Your Resume Maker Password Reset Code`,
    html,
    text: `Your Resume Maker password reset OTP is: ${otp}\n\nThis code expires in 15 minutes.\n\nIf you didn't request this, ignore this email.`,
  })
}
