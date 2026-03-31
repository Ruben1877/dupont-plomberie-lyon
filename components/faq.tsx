"use client";

import { useEffect, useRef } from 'react';
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import siteData from "@/lib/site-data";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
};

export default function Faq() {
  const faqsToDisplay = siteData.faq.slice(0, 4);

  return (
    <div className="bg-surface section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary-600">Questions Fréquentes</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading">
              Les réponses à vos interrogations
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqsToDisplay.map((faq, index) => (
              <AnimatedSection key={faq.question}>
                <Disclosure as="div" className="rounded-lg bg-white shadow-md" style={{ transitionDelay: `${index * 100}ms` }}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium text-primary-950 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-secondary-400 focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-primary-800 transition-transform`}
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
                        <Disclosure.Panel className="px-6 pb-4 pt-2 text-base text-text-muted">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
