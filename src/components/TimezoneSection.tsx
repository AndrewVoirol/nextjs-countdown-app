// src/components/TimezoneSection.tsx
'use client'

import { useTimezones } from '@/hooks/useTimezones'
import { REGIONS } from '@/utils/constants'

export default function TimezoneSection() {
  const timezones = useTimezones()

  return (
    <section className="dark-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REGIONS.map(region => (
            <div key={region} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300 border-b border-gray-700 pb-2">
                {region}
              </h2>
              <div className="space-y-3">
                {timezones
                  .filter(tz => tz.region === region)
                  .map(tz => (
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
          ))}
        </div>
      </div>
    </section>
  )
}