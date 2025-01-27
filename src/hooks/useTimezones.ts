// src/hooks/page.tsx
import { useState, useEffect } from 'react'
import type { TimezoneInfo } from '@/types'
import { TIMEZONES, getBaseLaunchDate } from '@/utils/constants'

export function useTimezones() {
  const [timezones, setTimezones] = useState<TimezoneInfo[]>([])

  useEffect(() => {
    const utcDate = getBaseLaunchDate()
    
    const timezoneData = TIMEZONES.map(zone => {
      const zoneDate = new Date(utcDate)
      zoneDate.setHours(utcDate.getHours() + zone.offset)
      
      return {
        name: zone.name,
        region: zone.region,
        time: zoneDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'UTC'
        }),
        nextDay: zoneDate.getDate() > utcDate.getDate()
      }
    })

    setTimezones(timezoneData)
  }, [])

  return timezones
}