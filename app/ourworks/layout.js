import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Infinity Tech Solution',
  description: 'Infinity Tech',
}

export default function RootLayout({ children }) {

  return (
    <main>
        {children}
    </main>
  )
}
