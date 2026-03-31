"use client"

import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Questions Fréquentes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Trouvez rapidement des réponses à vos questions
          </p>
        </div>

        <div className="space-y-4">
          {siteData.faq.slice(0, 4).map((item, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <Disclosure.Button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-medium text-navy-900 pr-8">
                      {item.question}
                    </h3>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-navy-600 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-5 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
