import { Inter, Roboto_Mono } from 'next/font/google'

// Replace Geist with these reliable alternatives
const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${robotoMono.className}`}>
      <body>{children}</body>
    </html>
  )
}
