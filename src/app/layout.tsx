import { PropsWithChildren } from 'react'

export const metadata = {
  title: 'Yugaantar',
  description: 'Fest organized by students of Scaler School of Technology',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
