import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white to-orange-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients and noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200">
            AI Assessment Platform
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Evaluate skills with playful, 3D-powered AI assessments
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Create interactive assessments that feel like games but measure real skills. 
            Adaptive scoring, objective insights, and instant reports—powered by AI.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-3 text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Get started free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
