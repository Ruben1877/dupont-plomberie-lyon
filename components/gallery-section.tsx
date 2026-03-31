"use client";

import { useState, useEffect, useRef, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import siteData from '@/lib/site-data';

type GalleryImage = {
  src: string;
  alt: string;
};

function toGalleryImage(item: { image?: string; src?: string; title?: string; alt?: string; description?: string }): GalleryImage {
  return {
    src: item.image || item.src || 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800',
    alt: item.alt || item.title || item.description || 'Réalisation plomberie',
  };
}

export default function GallerySection({ fullGallery = false }: { fullGallery?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const rawGallery = siteData.gallery || [];
  const allImages = rawGallery.map(toGalleryImage);
  const imagesToShow = fullGallery ? allImages : allImages.slice(0, 6);

  function closeModal() {
    setIsOpen(false);
    setTimeout(() => setSelectedImage(null), 300); // Wait for transition
  }

  function openModal(image: GalleryImage) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      const children = galleryRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (galleryRef.current) {
        const children = galleryRef.current.querySelectorAll('.animate-on-scroll');
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return (
    <>
      <div className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary-600">Nos Réalisations</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading">
              Un aperçu de notre savoir-faire
            </p>
          </div>
          <div ref={galleryRef} className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {imagesToShow.map((image, index) => (
              <div
                key={image.src}
                onClick={() => openModal(image)}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg animate-on-scroll opacity-0 translate-y-4 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  unoptimized={true}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <MagnifyingGlassPlusIcon className="h-12 w-12 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 rounded-full bg-white/50 p-1 text-gray-700 hover:bg-white"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Fermer</span>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  {selectedImage && (
                    <>
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        width={1200}
                        height={900}
                        unoptimized={true}
                        className="w-full rounded-lg object-contain"
                      />
                      <Dialog.Title as="h3" className="sr-only">
                        {selectedImage.alt}
                      </Dialog.Title>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
