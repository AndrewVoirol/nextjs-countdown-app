// src/components/TimezoneSection.tsx
'use client'

import { useTimezones } from '@/hooks/useTimezones'
import type { TimezoneInfo } from '@/types'

export default function TimezoneSection() {
  const timezones = useTimezones()

  return (
    <section className="dark-section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timezones.map((tz: TimezoneInfo) => (
            <div 
              key={tz.name}
              className="bg-gray-800/70 rounded-lg p-4 hover:-translate-y-1 transition-transform"
            >
              <div className="text-sm text-gray-400">{tz.name}</div>
              <div className="text-xl">{tz.time}</div>
              {tz.nextDay && (
                <div className="text-indigo-400 text-sm mt-1">Next Day</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}