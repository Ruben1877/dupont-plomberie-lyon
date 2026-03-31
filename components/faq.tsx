"use client"

import { Disclosure } from "@headlessui/react"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function Faq() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tout ce que vous devez savoir sur nos services
            </p>
          </div>
          <div className="mt-16 space-y-4">
            {siteData.faq.map((item, index) => (
              <Disclosure key={index} as="div" className="bg-white rounded-xl shadow-sm">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between px-6 py-6 text-left">
                      <span className="text-base font-semibold text-gray-900">{item.question}</span>
                      {open ? (
                        <MinusIcon className="h-5 w-5 text-gray-500" />
                      ) : (
                        <PlusIcon className="h-5 w-5 text-gray-500" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-6">
                      <p className="text-gray-600">{item.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
