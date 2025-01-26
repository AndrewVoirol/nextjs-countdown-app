// src/components/CountdownSection.tsx
'use client'

import { useState, useEffect } from 'react'

interface TimeUnit {
  value: number
  label: string
}

export default function CountdownSection() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([])
  const targetDate = new Date("2025-01-27T09:00:00-08:00")

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeUnits([])
        return
      }

      const units = [
        { value: Math.floor(diff / (1000 * 60 * 60 * 24)), label: 'Days' },
        { value: Math.floor((diff / (1000 * 60 * 60)) % 24), label: 'Hours' },
        { value: Math.floor((diff / 1000 / 60) % 60), label: 'Minutes' },
        { value: Math.floor((diff / 1000) % 60), label: 'Seconds' }
      ]
      
      setTimeUnits(units)
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
        <div className="text-xl text-center mb-12 font-medium opacity-90">
          Monday, January 27th, 9:00 AM (PT)
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto">
          {timeUnits.map((unit) => (
            <div 
              key={unit.label}
              className="bg-[--card-bg-light] rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-transform text-center"
            >
              <div className="text-4xl font-bold mb-1">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}