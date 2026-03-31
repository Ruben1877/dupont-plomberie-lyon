"use client";

import { useEffect, useRef } from 'react';
import siteData from "@/lib/site-data";
import { StarIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";

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

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary-600">Avis Clients</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading">
              La satisfaction de nos clients est notre priorité
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="-m-4">
            <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
              {siteData.testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name}>
                  <div 
                    className="flex flex-col justify-between h-full rounded-2xl bg-surface p-8 shadow-lg"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={clsx(
                              testimonial.rating > rating ? "text-secondary-400" : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <blockquote className="mt-4 text-text-muted">
                        <p>"{testimonial.text}"</p>
                      </blockquote>
                    </div>
                    <footer className="mt-6">
                      <p className="font-semibold text-primary-950">{testimonial.name}</p>
                    </footer>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
