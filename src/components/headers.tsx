"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
  const [visible, setVisible] = useState(true)
  const lastScrollTop = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollDown = scrollY > lastScrollTop.current

      if (scrollY > 100) {
        setVisible(!scrollDown)
      } else {
        setVisible(true)
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 dark:bg-black bg-white ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            onClick={handleClick}
            className="text-xl font-bold dark:text-white text-black"
          >
            QIQIDEV
          </Link>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/Rizqifajri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </Link>
                </Button>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
