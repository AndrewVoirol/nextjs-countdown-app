// src/hooks/useCountdown.ts

import { useState, useEffect } from 'react'
import type { TimeUnit } from '@/types'
import { getBaseLaunchDate } from '@/utils/constants'

export function useCountdown() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([])

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = getBaseLaunchDate()
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeUnits([])
        return
      }

      const units: TimeUnit[] = [
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

  return timeUnits
}