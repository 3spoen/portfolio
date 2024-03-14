import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const backupEmail = process.env.BACKUP_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  
  try {
    // Send the original email
    await resend.emails.send({
      from: fromEmail,
      to: [fromEmail,email], // Original recipient
      subject: subject,
      react: (
        /**TODO:
         * mak a signetur using your logo and sam text in to it with your contacts.
         */
        <> 
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Send a separate email to backupemail
    await resend.emails.send({
      from: fromEmail,
      to: [backupEmail], // Additional recipient
      subject: `subject: ${subject} Email:${email}`, 
      react: (
        <>
          <h1>{subject}</h1>
          <p>This is a copy of a message submitted:</p>
          <p>{message}</p>
          <p>Sent to: {email}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
