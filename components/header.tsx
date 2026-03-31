"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Dialog, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-navy-600 rounded-lg flex items-center justify-center">
                <span className="text-gold-400 font-bold text-xl">JD</span>
              </div>
              <div>
                <span className={`font-bold text-lg ${isScrolled ? "text-navy-600" : "text-white"}`}>
                  {siteData.businessName}
                </span>
                <span className={`block text-xs ${isScrolled ? "text-navy-400" : "text-white/80"}`}>
                  {siteData.trade}
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {siteData.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? "text-gray-700 hover:text-navy-600" 
                    : "text-white hover:text-gold-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteData.phone}`}
              className="bg-gold-400 text-navy-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-gold-500 transition-all hover:scale-105 hover:shadow-lg"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Urgence</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <Transition.Root show={isOpen} as="div">
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as="div"
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex items-center justify-between p-6 border-b">
                        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-navy-600 rounded-lg flex items-center justify-center">
                            <span className="text-gold-400 font-bold text-xl">JD</span>
                          </div>
                          <span className="font-bold text-lg text-navy-600">{siteData.businessName}</span>
                        </Link>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex-1 py-6 px-6">
                        <nav className="space-y-4">
                          {siteData.navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-navy-50 hover:text-navy-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </nav>
                        <div className="mt-8">
                          <a
                            href={`tel:${siteData.phone}`}
                            className="w-full bg-gold-400 text-navy-900 px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gold-500 transition-all hover:scale-105 hover:shadow-lg"
                          >
                            <PhoneIcon className="h-5 w-5" />
                            <span>Appeler maintenant</span>
                          </a>
                        </div>
                        <div className="mt-6 pt-6 border-t">
                          <p className="text-sm text-gray-500 text-center">{siteData.hours}</p>
                          <p className="text-sm font-medium text-navy-600 text-center mt-1">{siteData.emergency}</p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  )
}
