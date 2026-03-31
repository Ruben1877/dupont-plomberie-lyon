"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import siteData from '@/lib/site-data';
import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const children = containerRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (containerRef.current) {
        const children = containerRef.current.querySelectorAll('.animate-on-scroll');
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return (
    <div className="relative isolate overflow-hidden min-h-screen flex items-center gradient-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560440398-9ef748b3f4a2?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-primary-950/60"></div>
      
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 relative z-10">
        <div className="max-w-2xl text-center mx-auto sm:text-left sm:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-heading animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
            {siteData.tradeFull}
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-200 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            {siteData.tagline} Intervention rapide pour dépannage, installation et entretien.
          </p>
          <div className="mt-10 flex items-center gap-x-6 justify-center sm:justify-start animate-on-scroll opacity-0 translate-y-4 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
            <a
              href={`tel:${siteData.phone}`}
              className="group inline-flex items-center gap-x-3 rounded-md bg-secondary-400 px-6 py-3 text-sm font-semibold text-primary-950 shadow-lg hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400 transition-transform hover:scale-105"
            >
              <PhoneIcon className="h-5 w-5" />
              Urgence 24/7 - {siteData.phoneFormatted}
            </a>
            <Link
              href="/services"
              className="group inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-white hover:text-secondary-400 transition-colors"
            >
              Découvrir nos services <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
