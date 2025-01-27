// src/types/index.ts
export interface TimeUnit {
  readonly value: number;
  readonly label: string;
}

export type Region = 'Americas' | 'Europe & Africa' | 'Asia & Oceania'

export type TimeZone = Readonly<{
  name: string
  offset: number
  region: Region
}>

export type TimezoneInfo = Readonly<{
  name: string
  time: string
  nextDay: boolean
  region: Region
}>