"use client";

import { useEffect, useRef, useState } from 'react';
import siteData from '@/lib/site-data';
import { WrenchScrewdriverIcon, ClockIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

const iconMap: Record<string, typeof WrenchScrewdriverIcon> = { WrenchScrewdriverIcon, ClockIcon, TrophyIcon, UsersIcon };

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <div className="bg-primary-950 section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="flex flex-col items-center text-center animate-count-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                {Icon && <Icon className="h-12 w-12 text-secondary-400" />}
                <div className="mt-4 text-4xl font-bold tracking-tight text-white font-heading">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="mt-2 text-base text-primary-200">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
