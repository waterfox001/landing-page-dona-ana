import React, { useState } from 'react';
import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';

const INTEREST_OPTIONS = [
  'Enxoval para recém-nascido',
  'Moda infantil feminina',
  'Moda infantil masculina',
  'Kits e presentes',
  'Horário ou endereço da loja',
];

export function LocationAndContact() {
  const [selectedInterest, setSelectedInterest] = useState(INTEREST_OPTIONS[0]);
  const [childAgeOrNote, setChildAgeOrNote] = useState('');

  const customWhatsAppMessage = childAgeOrNote.trim()
    ? `Olá! Vim pelo site da Atrividinhos. Tenho interesse em: ${selectedInterest}. Detalhes: ${childAgeOrNote.trim()}`
    : `Olá! Vim pelo site da Atrividinhos e gostaria de saber mais sobre: ${selectedInterest}.`;

  return (
    <section
      id="contato"
      className="border-t border-[#232129]/6 bg-[#FAF9F6] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
            Fale pelo WhatsApp ou visite nossa loja
          </h2>
        </div>

        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Construtor rápido de mensagem para WhatsApp */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#232129]/10 bg-white p-6 sm:p-8 lg:col-span-6">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#232129]">
                Atendimento direto no WhatsApp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5666]">
                Selecione o que você procura e clique para falar com nossa equipe dizendo que veio pelo site.
              </p>

              <div className="mt-6">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  O que você procura?
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((option) => {
                    const active = selectedInterest === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedInterest(option)}
                        className={`min-h-[38px] rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                          active
                            ? 'bg-[#232129] text-white'
                            : 'border border-[#232129]/12 bg-[#FAF9F6] text-[#5A5666] hover:text-[#232129]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="detalhes-atendimento"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#5A5666]"
                >
                  Idade, tamanho ou dúvida (opcional)
                </label>
                <textarea
                  id="detalhes-atendimento"
                  rows={3}
                  value={childAgeOrNote}
                  onChange={(e) => setChildAgeOrNote(e.target.value)}
                  placeholder="Ex: Enxoval para bebê recém-nascido ou conjunto tamanho 4 anos..."
                  className="mt-2 w-full rounded-xl border border-[#232129]/15 bg-[#FAF9F6] p-3 text-sm text-[#232129] placeholder:text-[#5A5666]/70 focus:border-[#C95B42] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <a
                href={getWhatsAppUrl(customWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#18794E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Chamar no WhatsApp agora</span>
              </a>
            </div>
          </div>

          {/* Endereço, horários e mapa incorporado */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-[#232129]/10 bg-white lg:col-span-6">
            <div className="space-y-4 p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  <MapPin className="h-4 w-4 text-[#C95B42]" aria-hidden="true" />
                  <span>Endereço no Centro de Fortaleza</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold leading-relaxed text-[#232129] sm:text-base">
                  {STORE_CONFIG.address.full}
                </p>
                <p className="mt-1 text-xs text-[#5A5666]">
                  {STORE_CONFIG.address.parkingNote}
                </p>
              </div>

              <div className="border-t border-[#232129]/8 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  <Clock className="h-4 w-4 text-[#C95B42]" aria-hidden="true" />
                  <span>Horário de funcionamento</span>
                </div>
                <dl className="mt-2.5 grid grid-cols-1 gap-x-6 gap-y-1.5 text-xs sm:grid-cols-3">
                  {STORE_CONFIG.openingHours.map((item) => (
                    <div key={item.day} className="flex flex-col">
                      <dt className="text-[#5A5666]">{item.day}</dt>
                      <dd className="font-semibold tabular-nums text-[#232129]">
                        {item.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={STORE_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap rounded-xl bg-[#232129] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3A3744]"
                >
                  <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Como chegar</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[230px] flex-1 border-t border-[#232129]/8">
              <iframe
                title="Mapa da loja Atrividinhos na Rua General Sampaio, 766, Centro, Fortaleza"
                src={STORE_CONFIG.maps.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[230px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
