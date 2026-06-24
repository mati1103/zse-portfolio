import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, phone, company, service, description, timeline } = await req.json()

  if (!name || !email || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const [{ error }, { error: confirmError }] = await Promise.all([
    resend.emails.send({
      from: 'ZSE Inquiries <admin@zarembkasoftware.com>',
      to: 'admin@zarembkasoftware.com',
      replyTo: email,
      subject: `New Inquiry: ${service} — ${name}`,
      html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="margin-bottom:4px">New Project Inquiry</h2>
        <p style="color:#888;margin-top:0">Submitted via ZSE website</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project description:</strong></p>
        <p style="background:#f5f5f5;padding:12px;border-radius:6px;white-space:pre-wrap">${description}</p>
      </div>
    `,
    }),
    resend.emails.send({
      from: 'Matias Zarembka <admin@zarembkasoftware.com>',
      to: email,
      subject: `Thank you for your inquiry, ${name}`,
      html: `
      <div style="font-family:sans-serif;max-width:580px;margin:0 auto;color:#1a1a1a">
        <div style="background:#0f0f14;padding:28px 32px;border-radius:12px 12px 0 0">
          <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.08em;color:#a78bfa;text-transform:uppercase">Zarembka Software Engineering</p>
        </div>
        <div style="background:#ffffff;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0f0f14">Thank you for reaching out, ${name}.</h1>
          <p style="margin:0 0 24px;font-size:15px;color:#4b5563;line-height:1.6">
            I've received your inquiry and will review it promptly. You can expect to hear back from me within <strong>1–2 business days</strong>.
          </p>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin-bottom:24px">
            <p style="margin:0 0 12px;font-size:12px;font-weight:600;letter-spacing:0.06em;color:#6b7280;text-transform:uppercase">Your Inquiry Summary</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:6px 0;color:#6b7280;width:130px">Service</td><td style="padding:6px 0;color:#1a1a1a;font-weight:500">${service}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280">Timeline</td><td style="padding:6px 0;color:#1a1a1a;font-weight:500">${timeline}</td></tr>
              ${company ? `<tr><td style="padding:6px 0;color:#6b7280">Company</td><td style="padding:6px 0;color:#1a1a1a;font-weight:500">${company}</td></tr>` : ''}
            </table>
            <p style="margin:16px 0 6px;font-size:12px;font-weight:600;letter-spacing:0.06em;color:#6b7280;text-transform:uppercase">Project Description</p>
            <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;white-space:pre-wrap">${description}</p>
          </div>
          <p style="margin:0 0 6px;font-size:14px;color:#4b5563;line-height:1.6">
            If you have any additional details to share in the meantime, simply reply to this email.
          </p>
          <p style="margin:0;font-size:14px;color:#4b5563;line-height:1.6">
            Looking forward to learning more about your project.
          </p>
          <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e5e7eb">
            <p style="margin:0;font-size:14px;color:#1a1a1a;font-weight:600">Matias Zarembka</p>
            <p style="margin:2px 0 0;font-size:13px;color:#6b7280">Zarembka Software Engineering</p>
            <p style="margin:2px 0 0;font-size:13px;color:#6b7280">zarembkasoftware.com</p>
          </div>
        </div>
      </div>
    `,
    }),
  ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (confirmError) {
    console.error('Confirmation email failed:', confirmError.message)
  }

  return NextResponse.json({ success: true })
}
