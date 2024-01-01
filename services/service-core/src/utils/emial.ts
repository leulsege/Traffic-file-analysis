import nodemailer from 'nodemailer'

interface EmailOptions {
  email: string
  subject: string
  message: string
}

const sendEmail = async (options: EmailOptions): Promise<void> => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // 2) Define the email options
  const mailOptions: nodemailer.SendMailOptions = {
    from: 'leulsegedgebremedhin@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  }

  // 3) Actually send the email
  await transporter.sendMail(mailOptions)
}

export default sendEmail
