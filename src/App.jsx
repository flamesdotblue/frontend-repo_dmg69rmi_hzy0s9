import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AssessmentFlow from './components/AssessmentFlow';
import CTA from './components/CTA';

function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-600 text-white font-bold">AI</span>
          <span className="text-lg font-semibold">Assess</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">Use cases</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#get-started" className="rounded-lg bg-gray-900 px-3 py-2 font-medium text-white hover:bg-gray-800">Get started</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <AssessmentFlow />
        <CTA />
      </main>
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} AI Assess. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
