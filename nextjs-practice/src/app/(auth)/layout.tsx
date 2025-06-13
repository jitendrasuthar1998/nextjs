export const metadata = {
    title: 'Auth Pages',
    description: 'Revising Nextjs Route Grouping',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <h3>Authentication Routes</h3>
        <div>{children}</div>
        </>
    )
  }
