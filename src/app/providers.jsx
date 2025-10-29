'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light"
      enableSystem={false}
      storageKey="portage-theme"
    >
      {children}
    </ThemeProvider>
  )
}