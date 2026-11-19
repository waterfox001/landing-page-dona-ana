import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/storeConfig';
import type { IllustrationMotif } from '../data/catalog';
import { HandDrawnFlower, HandDrawnStar } from './HandDrawnDoodles';
import { MediaFrame } from './MediaFrame';

interface SellingLine {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  examples: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  imageAlt: string;
  motif: IllustrationMotif;
  cardBg: string;
  badgeBg: string;
  stickyTopClass: string;
  zIndexClass: string;
}

const SELLING_LINES: SellingLine[] = [
  {
    id: 'enxoval',
    number: '01',
    title: 'Enxoval para Bebês',
    tag: 'Recém-nascidos',
    description:
      'Tudo para a chegada do bebê com toque macio e respirável para o clima de Fortaleza.',
    examples: 'Saída de maternidade · Bodies em algodão · Mantas e cueiros',
    imageUrl: '/src/assets/images/cat_bebe_recem_nascido_1795093117695.jpg',
    secondaryImageUrl: '/src/assets/images/enxoval_saida_maternidade_1794948049750.jpg',
    imageAlt: 'Bebê recém-nascido vestindo conjunto de enxoval da Atrividinhos',
    motif: 'enxoval-kit',
    cardBg: 'bg-[#FFF5F7]',
    badgeBg: 'bg-[#F7D6DF] text-[#7D2B43]',
    stickyTopClass: 'top-[76px] sm:top-[84px]',
    zIndexClass: 'z-10',
  },
  {
    id: 'feminino',
    number: '02',
    title: 'Moda Infantil Feminina',
    tag: 'Meninas',
    description:
      'Looks leves e confortáveis para brincar, passear e celebrar momentos em família.',
    examples: 'Vestidos de passeio · Conjuntos leves · Peças em algodão',
    imageUrl: '/src/assets/images/cat_crianca_feminina_1795093118509.jpg',
    secondaryImageUrl: '/src/assets/images/moda_feminina_vestido_1794948050932.jpg',
    imageAlt: 'Menina vestindo conjunto infantil feminino da Atrividinhos',
    motif: 'feminino-vestido',
    cardBg: 'bg-[#F7F4FD]',
    badgeBg: 'bg-[#EAE2F8] text-[#4E3580]',
    stickyTopClass: 'top-[88px] sm:top-[112px]',
    zIndexClass: 'z-20',
  },
  {
    id: 'masculino',
    number: '03',
    title: 'Moda Infantil Masculina',
    tag: 'Meninos',
    description:
      'Peças práticas com ótimo caimento para o dia a dia, escola e ocasiões especiais.',
    examples: 'Camisas polo · Conjuntos camiseta e bermuda · Looks casuais',
    imageUrl: '/src/assets/images/cat_crianca_masculina_1795093118855.jpg',
    secondaryImageUrl: '/src/assets/images/moda_masculina_polo_1794948052443.jpg',
    imageAlt: 'Menino vestindo camisa polo e bermuda da Atrividinhos',
    motif: 'masculino-conjunto',
    cardBg: 'bg-[#F2F8FE]',
    badgeBg: 'bg-[#D9ECFA] text-[#22527A]',
    stickyTopClass: 'top-[100px] sm:top-[140px]',
    zIndexClass: 'z-30',
  },
  {
    id: 'primeiros-cuidados',
    number: '04',
    title: 'Primeiros Cuidados e Kits',
    tag: 'Maternidade e presentes',
    description:
      'Itens essenciais para completar a bolsa da maternidade ou presentear quem você ama.',
    examples: 'Fraldinhas · Sapatinhos de tecido · Toucas, luvinhas e babadores',
    imageUrl: '/src/assets/images/enxoval_primeiros_cuidados_1794948068478.jpg',
    secondaryImageUrl: '/src/assets/images/enxoval_mantas_cueiros_1794948068339.jpg',
    imageAlt: 'Linha de primeiros cuidados e kits para recém-nascidos na Atrividinhos',
    motif: 'novidade-maternidade',
    cardBg: 'bg-[#FEF9E8]',
    badgeBg: 'bg-[#FDF0C4] text-[#7A5910]',
    stickyTopClass: 'top-[112px] sm:top-[168px]',
    zIndexClass: 'z-40',
  },
];

export function WhatWeSell() {
  return (
    <section
      id="produtos"
      className="border-y border-[#232129]/6 bg-[#FAF9F6] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
            <HandDrawnFlower className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>O que vendemos</span>
            <HandDrawnStar className="h-4 w-4" color="#E07A5F" />
          </div>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#C95B42] text-balance sm:text-4xl">
            Enxovais e roupas infantis para cada fase
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#5A5666] sm:text-base">
            Role para conhecer nossas linhas e fale com a loja para conferir modelos e tamanhos.
          </p>
        </div>

        {/* Pilha interativa de cartões ao rolar (empilha 01 -> 04 descendo e desempilha subindo) */}
        <div className="relative mt-10 flex flex-col gap-8 sm:mt-12 sm:gap-12">
          {SELLING_LINES.map((line) => (
            <article
              key={line.id}
              className={`group sticky ${line.stickyTopClass} ${line.zIndexClass} rounded-3xl border border-[#232129]/12 ${line.cardBg} p-4 shadow-[0_-10px_28px_-14px_rgba(35,33,41,0.16)] transition-transform duration-200 sm:p-6`}
            >
              <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-12 sm:gap-7">
                <div className="sm:col-span-5">
                  <MediaFrame
                    imageUrl={line.imageUrl}
                    secondaryImageUrl={line.secondaryImageUrl}
                    alt={line.imageAlt}
                    motif={line.motif}
                    accentBg="bg-white"
                    aspectClassName="aspect-[16/10] sm:aspect-[4/3]"
                  />
                </div>

                <div className="flex flex-col px-1 sm:col-span-7">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 font-display text-xs font-semibold tabular-nums ${line.badgeBg}`}
                    >
                      {line.number} · {line.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-[#232129] sm:text-[1.65rem]">
                    {line.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#5A5666] sm:text-base">
                    {line.description}
                  </p>

                  <p className="mt-3 border-t border-[#232129]/8 pt-3 text-xs font-medium leading-relaxed text-[#232129]/80 sm:text-sm">
                    {line.examples}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão único de WhatsApp abaixo da pilha de cartões */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={getWhatsAppUrl(
              'Olá! Vim pelo site da Atrividinhos e gostaria de consultar modelos, tamanhos e valores.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#18794E] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E] sm:w-auto sm:text-base"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Consultar modelos e tamanhos no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
