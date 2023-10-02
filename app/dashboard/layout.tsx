


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // layout all children
  return (
    <>
  <header>
    Dashboard Setting Header
  </header>
    {children}
    Dashboard Setting Footer
  <footer></footer>
    </>
  )
}
