import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import { HandDrawnRainbow, HandDrawnStar } from './HandDrawnDoodles';

export function Hero() {
  const { hero } = STORE_CONFIG;

  return (
    <section
      id="inicio"
      aria-label="Apresentação da Atrividinhos"
      className="bg-white pb-6 pt-4 sm:pb-10 sm:pt-6"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#232129] text-white sm:rounded-3xl">
          <div className="relative flex flex-col lg:min-h-[520px] lg:justify-center">
            {/* Fotografia principal */}
            <div className="relative h-64 w-full shrink-0 overflow-hidden sm:h-80 lg:absolute lg:inset-0 lg:h-full">
              <img
                src={hero.imageUrl}
                alt={hero.imageAlt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-[74%_20%] sm:object-[78%_18%] lg:object-right"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#232129] via-[#232129]/25 to-transparent lg:bg-gradient-to-r lg:from-[#232129] lg:via-[#232129]/90 lg:to-transparent"
              />
            </div>

            {/* Bloco textual e conversão principal para o WhatsApp */}
            <div className="relative z-10 flex flex-1 flex-col justify-center p-6 pt-3 sm:p-10 sm:pt-5 lg:max-w-[58%] lg:p-14">
              <div className="mb-3 flex items-center gap-2.5">
                <HandDrawnRainbow className="h-7 w-11 shrink-0 sm:h-9 sm:w-14" />
                <HandDrawnStar className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" color="#FDF0C4" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-[#FDF0C4] sm:text-sm">
                {hero.kicker}
              </p>

              <h1
                className="mt-2 font-display font-semibold tracking-tight text-white text-balance"
                style={{
                  fontSize: 'clamp(1.85rem, 3.8vw, 3.25rem)',
                  lineHeight: 1.1,
                }}
              >
                {hero.title}
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                {hero.subtitle}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={getWhatsAppUrl(hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{hero.primaryCta}</span>
                </a>

                <a
                  href="#produtos"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors duration-150 hover:border-white/50 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  <span>{hero.secondaryCta}</span>
                  <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
