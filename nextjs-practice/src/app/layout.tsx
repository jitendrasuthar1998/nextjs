import Header from "../../components/Header"

export const metadata = {
  title: 'Next.js',
  description: 'Revising Nextjs skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {/* <header>Header</header> */}
      <Header/>
      {children}
      <footer>Footer</footer>
      </body>
      
    </html>
  )
}
