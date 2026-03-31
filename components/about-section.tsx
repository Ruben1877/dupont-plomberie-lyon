"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteData from '@/lib/site-data';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { ShieldCheckIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
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
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default function AboutSection() {
  return (
    <div className="relative bg-white section-padding">
      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10 px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h2 className="text-base font-semibold leading-7 text-secondary-600">Notre Engagement</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading">
            L'artisanat au service de votre confort
          </p>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Depuis plus de 15 ans, Jean Dupont Plomberie s'engage à fournir un service de qualité, alliant savoir-faire traditionnel et techniques modernes. Basé à Lyon, nous sommes votre partenaire de confiance pour tous vos besoins en plomberie et chauffage.
          </p>
          <ul className="mt-8 space-y-4 text-text-muted">
            <li className="flex gap-x-3">
              <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-primary-800" aria-hidden="true" />
              <span><strong>Qualité et Fiabilité :</strong> Des interventions soignées et des matériaux durables.</span>
            </li>
            <li className="flex gap-x-3">
              <ClockIcon className="mt-1 h-5 w-5 flex-none text-primary-800" aria-hidden="true" />
              <span><strong>Rapidité et Disponibilité :</strong> Un service d'urgence efficace pour répondre à vos imprévus.</span>
            </li>
            <li className="flex gap-x-3">
              <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-primary-800" aria-hidden="true" />
              <span><strong>Conseil et Proximité :</strong> Un artisan à votre écoute pour des solutions sur mesure.</span>
            </li>
          </ul>
          <div className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-x-2 rounded-md bg-primary-950 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-950 transition-transform hover:scale-105"
            >
              En savoir plus sur nous <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow" style={{ transitionDelay: '200ms' }}>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1542621334-a254cf47763b?q=80&w=800&h=600&fit=crop"
              alt="Artisan plombier travaillant avec concentration"
              width={800}
              height={600}
              unoptimized={true}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
