import React from 'react';
import { AboutAndDifferentials } from './components/AboutAndDifferentials';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocationAndContact } from './components/LocationAndContact';
import { WhatWeSell } from './components/WhatWeSell';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#232129]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[#232129] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <WhatWeSell />
        <AboutAndDifferentials />
        <LocationAndContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
