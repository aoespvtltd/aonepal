'use client'

import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function MobileHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const navItems = ['Home', 'Projects', 'Blogs', 'Contacts', 'Services', 'About Us']

  // Function to close the sheet
  const closeSheet = () => {
    setIsSheetOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background border-b md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://files.catbox.moe/76j4ey.svg"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground w-8 py-0">
                  <Menu className="h-6 w-6 cursor-pointer" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="mt-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item}>
                        <Link
                          to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                          className="block py-2 text-foreground hover:text-primary transition duration-200"
                          onClick={closeSheet} // Close sheet when a link is clicked
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {/* <main className="mt-14">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Page Content</h1>
          <p className="mt-4">This is a sample page content that should not overlap with the navbar.</p>
        </div>
      </main> */}
    </>
  )
}
