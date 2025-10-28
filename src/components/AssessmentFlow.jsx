import React from 'react';
import { Wand2, LayoutList, PlayCircle, FileBarChart } from 'lucide-react';

const steps = [
  {
    icon: Wand2,
    title: 'Describe the role',
    desc: 'Choose skills, frameworks, and difficulty. The system drafts an assessment for you.',
  },
  {
    icon: LayoutList,
    title: 'Customize tasks',
    desc: 'Pick from interactive challenges—coding, design, writing, logic, and more.',
  },
  {
    icon: PlayCircle,
    title: 'Invite candidates',
    desc: 'Share a secure link or integrate with your ATS. Real-time monitoring optional.',
  },
  {
    icon: FileBarChart,
    title: 'Review insights',
    desc: 'Get skill breakdowns, sample answers, and calibration guidance instantly.',
  },
];

export default function AssessmentFlow() {
  return (
    <section className="relative w-full bg-orange-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From prompt to insights in minutes
          </h2>
          <p className="mt-3 text-gray-600">
            A streamlined flow so you can focus on decisions, not busywork.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li
              key={title}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-700 ring-1 ring-orange-200">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-orange-700">
                Step {idx + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
