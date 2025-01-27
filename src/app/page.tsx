import CountdownSection from '@/components/CountdownSection'
import TimezoneSection from '@/components/TimezoneSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <CountdownSection />
      <TimezoneSection />
    </main>
  )
}