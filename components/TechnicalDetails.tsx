'use client'

import { useState, type ReactNode } from 'react'

type Tab = 'Infrastructure' | 'Stack'
const TABS: Tab[] = ['Infrastructure', 'Stack']

interface TechnicalDetailsProps {
  infraContent: ReactNode
  stackContent: ReactNode
}

export default function TechnicalDetails({ infraContent, stackContent }: TechnicalDetailsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('Infrastructure')

  return (
    <div>
      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl border border-border-neutral bg-ink/[0.015] p-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
            className={`shrink-0 rounded-lg px-4 py-2 text-center text-[13px] font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt ${
              activeTab === tab ? 'bg-ink text-warm-light' : 'text-muted hover:text-ink'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Infrastructure' ? infraContent : stackContent}
    </div>
  )
}
