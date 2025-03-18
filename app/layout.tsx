import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Professionaly working as a software developer handling web and mobile applications with frontend technologies like React, React Native, and backend technologies like Node.js, Express.js, and MongoDB.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
