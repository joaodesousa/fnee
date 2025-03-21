import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <title>FNEE - Federação Nacional dos Estudos Europeus</title>
        <meta
          name="description"
          content="Federação Nacional dos Estudos Europeus - Aproximando a União Europeia dos jovens portugueses"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}