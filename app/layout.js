import './globals.css'
import AuthSessionProvider from '@/components/providers/SessionProvider'

export const metadata = {
  title: 'Resume Maker — Build Your Dream Resume',
  description: 'Premium resume maker with stunning templates, live preview, and one-click export.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <AuthSessionProvider>
          {/* <ThemeProvider> */}
            {children}
          {/* </ThemeProvider> */}
        </AuthSessionProvider>
      </body>
    </html>
  )
}
