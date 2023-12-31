
import Head from 'next/head'
import './globals.css'


export const metadata = {
  title: 'metaverse',
  description: 'created by thirupathi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
