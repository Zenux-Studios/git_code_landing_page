"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon, Code } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8" />
              <span className="font-bold text-xl">Git Code</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/support">
              <Button variant="ghost">Support</Button>
            </Link>
            <Link href="/privacy">
              <Button variant="ghost">Privacy Policy</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}