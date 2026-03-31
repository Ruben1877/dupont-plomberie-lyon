"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import siteData from '@/lib/site-data';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

export default function Cta() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'scale-95');
            entry.target.classList.add('opacity-100', 'scale-100');
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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-24 lg:px-8">
        <div 
          ref={ref}
          className="relative isolate overflow-hidden gradient-cta px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 opacity-0 scale-95 transition-all duration-700 ease-out"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement. Nous sommes à votre écoute pour toute urgence ou projet d'installation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={`tel:${siteData.phone}`}
              className="group inline-flex items-center gap-x-2 rounded-md bg-secondary-400 px-6 py-3 text-sm font-semibold text-primary-950 shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400 transition-transform hover:scale-105"
            >
              <PhoneIcon className="h-5 w-5" />
              Appeler pour une urgence
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-950 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform hover:scale-105"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Demander un devis
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#ca8a04" />
                <stop offset={1} stopColor="#333fa6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
