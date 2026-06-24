import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, company, service, description, timeline } = await req.json()

  if (!name || !email || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'ZSE Inquiries <inquiries@zarembkasoftware.com>',
    to: 'matiaszarembka@gmail.com',
    replyTo: email,
    subject: `New Inquiry: ${service} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="margin-bottom:4px">New Project Inquiry</h2>
        <p style="color:#888;margin-top:0">Submitted via ZSE website</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project description:</strong></p>
        <p style="background:#f5f5f5;padding:12px;border-radius:6px;white-space:pre-wrap">${description}</p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const { error: confirmError } = await resend.emails.send({
    from: 'Matiasz Zarembka <hello@zarembkasoftware.com>',
    to: email,
    subject: 'Got your inquiry — I\'ll be in touch soon',
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="margin-bottom:4px">Thanks for reaching out, ${name}!</h2>
        <p style="color:#888;margin-top:0">I've received your inquiry and will get back to you within 1–2 business days.</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p><strong>Here's what you submitted:</strong></p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project description:</strong></p>
        <p style="background:#f5f5f5;padding:12px;border-radius:6px;white-space:pre-wrap">${description}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="color:#888;font-size:13px">— Matiasz Zarembka · Zarembka Software Engineering</p>
      </div>
    `,
  })

  if (confirmError) {
    console.error('Confirmation email failed:', confirmError.message)
  }

  return NextResponse.json({ success: true })
}
