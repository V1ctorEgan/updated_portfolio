// project-root/api/contact.js (or equivalent path for Next.js)

import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
// This key is loaded automatically by Vercel for deployments and by Next.js/Vite for local dev.
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Ensure the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed. Only POST requests are accepted.' });
  }

  // 2. Extract form data from the request body
  const { name, email, subject, message } = req.body;

  // 3. Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields: Name, Email, and Message are mandatory.' });
  }

  // Optional: Add more robust validation here, e.g., for email format
  // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //   return res.status(400).json({ message: 'Invalid email format.' });
  // }

  try {
    // 4. Send the email using Resend
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Use 'onboarding@resend.dev' as 'from' since you don't have a custom domain.
      // You can put your name before the email for better display.
      from: 'Egan Victor <onboarding@resend.dev>',
      
      // This is YOUR email address where you want to receive the contact messages.
      to: 'victorifeanyi2004@gmail.com', 
      
      // Set 'replyTo' to the user's email so you can easily reply from your inbox.
      replyTo: email, 
      
      // Dynamic subject line
      subject: `Portfolio Contact from Egan Victor's Website: ${subject || 'No Subject Provided'}`,
      
      // HTML content for a nicely formatted email
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      
      // Plain text fallback for email clients that don't display HTML
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\nMessage: ${message}`,
    });

    // 5. Check for errors from Resend itself
    if (error) {
      console.error('Resend API Error:', error); // Log the full error for debugging
      return res.status(400).json({ 
        message: 'Failed to send message via Resend. Please try again.', 
        details: error.name || 'Unknown Resend error' 
      });
    }

    // 6. Success response
    return res.status(200).json({ message: 'Message sent successfully!', data });

  } catch (catchError) {
    // 7. Handle any unexpected errors during the process
    console.error('Serverless function execution error:', catchError); // Log the full error
    return res.status(500).json({ message: 'An unexpected server error occurred. Please try again later.' });
  }
}   