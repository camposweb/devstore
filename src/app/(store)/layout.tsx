import { Header } from '@/components/Header'
import { ReactNode } from 'react'

interface StoreLayoutProps {
  children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="grid-rows-app mx-auto grid min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
