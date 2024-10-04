import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from '../lib/utils'

export const metadata: Metadata = {
  title: "Calendly clone",
  description: "Calendly clone",
}

/**
 * Esto especifica que solo se cargue el subconjunto de caracteres latinos de la fuente Inter, 
 * optimizando el tamaño de la fuente.
 * 
 * Ademas crea una variable CSS personalizada (--font-sans) para facilitar el uso de la fuente 
 * en todo tu CSS global o componentes. Esta variable puede luego utilizarse en tus estilos 
 * para aplicar la fuente a diferentes elementos.
 */
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={ cn(
        "",
        inter.className
      ) }>
        { children }
      </body>
    </html>
  )
}
