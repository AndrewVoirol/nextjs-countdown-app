// src/utils/constants.ts

import type { TimeZone } from '@/types'

export const BASE_LAUNCH_TIMESTAMP = Date.parse("2025-01-27T17:00:00Z") // 9AM PST in UTC
export const LAUNCH_TIME_STRING = "9:00 AM (PT)"
export const LAUNCH_DATE_STRING = "Monday, January 27th"

export const REGIONS = [
  'Americas',
  'Europe & Africa',
  'Asia & Oceania'
] as const

export const TIMEZONES: readonly TimeZone[] = [
  // Americas
  { name: "PST (Vancouver/Los Angeles)", offset: -8, region: 'Americas' },
  { name: "MST (Denver)", offset: -7, region: 'Americas' },
  { name: "CST (Chicago)", offset: -6, region: 'Americas' },
  { name: "EST (Toronto/New York)", offset: -5, region: 'Americas' },
  
  // Europe & Africa
  { name: "GMT (London)", offset: 0, region: 'Europe & Africa' },
  { name: "CET (Paris/Berlin)", offset: 1, region: 'Europe & Africa' },
  { name: "EET (Cairo)", offset: 2, region: 'Europe & Africa' },
  { name: "MSK (Moscow)", offset: 3, region: 'Europe & Africa' },
  { name: "SAST (Johannesburg)", offset: 2, region: 'Europe & Africa' },
  
  // Asia & Oceania
  { name: "IST (Mumbai)", offset: 5.5, region: 'Asia & Oceania' },
  { name: "CST (Shanghai)", offset: 8, region: 'Asia & Oceania' },
  { name: "JST (Tokyo)", offset: 9, region: 'Asia & Oceania' },
  { name: "SGT (Singapore)", offset: 8, region: 'Asia & Oceania' },
  { name: "AEDT (Sydney)", offset: 11, region: 'Asia & Oceania' },
  { name: "NZDT (Auckland)", offset: 13, region: 'Asia & Oceania' }
]

export function getBaseLaunchDate(): Date {
  const utcDate = new Date(BASE_LAUNCH_TIMESTAMP)
  return utcDate
}