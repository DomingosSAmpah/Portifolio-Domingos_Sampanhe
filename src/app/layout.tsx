"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu/Menu'
import Footer from '@/components/footer/Footer'
import Head from './head'

// Geral styled Js
import * as S from '../ui/styles'
import {darkTheme} from '../utils/Themes'
import { ThemeProvider } from 'styled-components'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <html lang="en">
        <Head/>
        <S.Body className={inter.className}>
        <Menu />
          {children}
        </S.Body> 
        <Footer />
      </html>
    </ThemeProvider>
  )
}