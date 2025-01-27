// src/hooks/page.tsx
import { useState, useEffect, useCallback } from 'react'
import type { TimezoneInfo } from '@/types'
import { getBaseLaunchDate, TIMEZONES } from '@/utils/constants'

export function useTimezones() {
  const [timezones, setTimezones] = useState<ReadonlyArray<TimezoneInfo>>([])

  const calculateTimezones = useCallback(() => {
    const basePT = getBaseLaunchDate()
    
    return TIMEZONES.map(zone => {
      const zoneDate = new Date(basePT.getTime() + (zone.offset + 8) * 60 * 60 * 1000)
      return {
        name: zone.name,
        time: zoneDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }),
        nextDay: zoneDate.getDate() > basePT.getDate()
      }
    })
  }, [])

  useEffect(() => {
    setTimezones(calculateTimezones())
  }, [calculateTimezones])

  return timezones
}