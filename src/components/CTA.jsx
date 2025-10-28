import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 shadow-xl sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Ready to build your first AI assessment?</h3>
              <p className="mt-2 text-white/90">
                Start with a free workspace. No credit card required.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Create free account
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore features
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-white/60">
          Trusted by hiring teams and educators for fair, engaging evaluations.
        </p>
      </div>
    </section>
  );
}
