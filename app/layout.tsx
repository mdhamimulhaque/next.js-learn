import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'next.js learn',
  description: 'learning next.js at the very first time',
  keyword: 'web development, html,css,javascript,react js,typescript'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
