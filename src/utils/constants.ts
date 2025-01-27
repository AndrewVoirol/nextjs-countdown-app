// src/utils/constants.ts

import type { TimeZone } from '@/types'

// Use timestamp for better cross-browser compatibility
export const BASE_LAUNCH_TIMESTAMP = Date.parse("2025-01-27T09:00:00-08:00")
export const LAUNCH_TIME_STRING = "9:00 AM (PT)"
export const LAUNCH_DATE_STRING = "Monday, January 27th"

export const TIMEZONES: readonly TimeZone[] = [
  { name: "PST (Pacific)", offset: -8 },
  { name: "MST (Mountain)", offset: -7 },
  { name: "CST (Central)", offset: -6 },
  { name: "EST (Eastern)", offset: -5 },
  { name: "GMT (London)", offset: 0 },
  { name: "CET (Paris)", offset: 1 },
  { name: "IST (India)", offset: 5.5 },
  { name: "JST (Tokyo)", offset: 9 }
]

export function getBaseLaunchDate(): Date {
  return new Date(BASE_LAUNCH_TIMESTAMP)
}