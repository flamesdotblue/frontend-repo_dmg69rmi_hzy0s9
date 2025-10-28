import React from 'react';
import { Sparkles, Gauge, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Generated Questions',
    desc: 'Instantly create tailored questions aligned to roles, seniority, and frameworks.',
  },
  {
    icon: Gauge,
    title: 'Adaptive Difficulty',
    desc: 'Smart routing adapts in real time to accurately gauge true skill levels.',
  },
  {
    icon: BarChart3,
    title: 'Objective Scoring',
    desc: 'Rubric-based evaluation with bias checks and transparent scoring notes.',
  },
  {
    icon: Shield,
    title: 'Secure & Proctored',
    desc: 'Built-in proctoring signals and integrity controls to keep results trustworthy.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to assess with confidence
          </h2>
          <p className="mt-3 text-gray-600">
            Design, deliver, and analyze assessments—from creative tasks to technical challenges.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-orange-100 bg-gradient-to-b from-white to-orange-50/50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-700 ring-1 ring-orange-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
