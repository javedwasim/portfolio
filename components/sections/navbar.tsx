'use client'

import Link from 'next/link'
import { MountainIcon } from 'lucide-react'
import { Button } from '@/components/sections/button'
import { ThemeToggle } from '@/components/sections/theme-toggle'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold">Javed Wasim</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#about" className="hover:underline hover:underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#skills" className="hover:underline hover:underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#experience" className="hover:underline hover:underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#projects" className="hover:underline hover:underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="hover:underline hover:underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button>Contact Me</Button>
        </div>
      </div>
    </header>
  )
}