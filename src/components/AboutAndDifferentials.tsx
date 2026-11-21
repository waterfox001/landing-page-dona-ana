import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import {
  HandDrawnFlower,
  HandDrawnHeart,
  HandDrawnRainbow,
  HandDrawnStar,
  MotifIllustration,
} from './HandDrawnDoodles';

export function AboutAndDifferentials() {
  return (
    <section id="sobre" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
              <span>Sobre a Atrividinhos</span>
              <HandDrawnHeart className="h-4 w-4" />
            </div>

            <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-[#232129] text-balance sm:text-4xl">
              {STORE_CONFIG.about.title}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5A5666] sm:text-lg">
              {STORE_CONFIG.about.text}
            </p>

            <div className="mt-7">
              <a
                href={getWhatsAppUrl(
                  'Olá! Vim pelo site da Atrividinhos e gostaria de conhecer mais sobre a loja e os produtos.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Conversar com a loja no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="flex items-stretch lg:col-span-5">
            <div className="paper-canvas flex w-full flex-col justify-between rounded-3xl border border-[#232129]/10 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <HandDrawnFlower className="h-9 w-9" />
                <HandDrawnStar className="h-6 w-6" color="#52A686" />
              </div>

              {STORE_CONFIG.about.imageUrl ? (
                <div className="my-5 aspect-[4/3] overflow-hidden rounded-2xl border border-[#232129]/10 bg-white">
                  <img
                    src={STORE_CONFIG.about.imageUrl}
                    alt={STORE_CONFIG.about.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="my-5 flex flex-1 flex-col items-center justify-center rounded-2xl border border-[#232129]/8 bg-white p-6">
                  <MotifIllustration
                    motif="galeria-fachada"
                    className="h-44 w-full"
                  />
                </div>
              )}

              <div className="flex justify-end">
                <HandDrawnRainbow className="h-10 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
