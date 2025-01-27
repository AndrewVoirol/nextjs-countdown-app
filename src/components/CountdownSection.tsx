// src/components/CountdownSection.tsx
'use client'

import { useState, useEffect } from 'react'
import type { TimeUnit } from '@/types'
import { BASE_LAUNCH_TIMESTAMP, LAUNCH_DATE_STRING, LAUNCH_TIME_STRING } from '@/utils/constants'

export default function CountdownSection() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([])

  useEffect(() => {
    const targetDate = new Date(BASE_LAUNCH_TIMESTAMP)

    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeUnits([])
        return
      }

      setTimeUnits([
        { value: Math.floor(diff / (1000 * 60 * 60 * 24)), label: 'Days' },
        { value: Math.floor((diff / (1000 * 60 * 60)) % 24), label: 'Hours' },
        { value: Math.floor((diff / 1000 / 60) % 60), label: 'Minutes' },
        { value: Math.floor((diff / 1000) % 60), label: 'Seconds' }
      ])
    }

    const timer = setInterval(updateCountdown, 1000)
    updateCountdown()
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="light-section">
      <div className="container">
        <h1 className="text-4xl md:text-[clamp(2rem,5vw,3.5rem)] font-extrabold mb-2 tracking-tight text-center">
          Countdown to Launch
        </h1>
        <div className="text-center text-lg mb-12">
          {LAUNCH_DATE_STRING}, {LAUNCH_TIME_STRING}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit) => (
            <div 
              key={unit.label}
              className="bg-white/70 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div className="text-3xl font-bold mb-1">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wider opacity-75">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}