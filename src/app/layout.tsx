import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        {children}
        <div className="cursor-follower"></div>
      </body>
    </html>
  )
}


