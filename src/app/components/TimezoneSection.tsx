// src/components/TimezoneSection.tsx
'use client'

import { useState, useEffect } from 'react'

export default function TimezoneSection() {
  const [timezones, setTimezones] = useState([])
  const basePT = new Date("2025-01-27T09:00:00-08:00")

  useEffect(() => {
    const zones = [
      { name: 'Local', offset: -new Date().getTimezoneOffset() / 60 },
      { name: 'PT (Pacific)', offset: -8 },
      { name: 'MT (Mountain)', offset: -7 },
      { name: 'CT (Central)', offset: -6 },
      { name: 'ET (Eastern)', offset: -5 },
      { name: 'GMT (London)', offset: 0 },
      { name: 'CET (Paris)', offset: 1 },
      { name: 'IST (India)', offset: 5.5 },
      { name: 'JST (Tokyo)', offset: 9 }
    ]

    const timezoneData = zones.map(zone => {
      const time = new Date(basePT.getTime() + (zone.offset + 8) * 60 * 60 * 1000)
      return {
        name: zone.name,
        time: time.toLocaleTimeString('en-US', { 
          hour: '2-digit',
          minute: '2-digit',
          hour12: true 
        }),
        nextDay: time.getDate() > basePT.getDate()
      }
    })

    setTimezones(timezoneData)
  }, [])

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timezones.map((tz) => (
            <div key={tz.name} className="bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-400">{tz.name}</div>
              <div className="text-xl">{tz.time}</div>
              {tz.nextDay && (
                <div className="text-xs text-blue-400">Next Day</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}