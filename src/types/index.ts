// src/types/index.ts
export interface TimeUnit {
  readonly value: number;
  readonly label: string;
}

export interface TimezoneInfo {
  readonly name: string;
  readonly time: string;
  readonly nextDay: boolean;
}

export type TimeZone = Readonly<{
  name: string
  offset: number
}>