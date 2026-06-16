import { BentoTile } from '@/components/ui/BentoTile'
import { Flame } from 'lucide-react'

export function HeroTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay} className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-surface to-surface-hover border-l-4 border-l-primary flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back, Alex</h1>
        <p className="text-text-muted">You&apos;ve learned 3 new concepts this week. Keep it up!</p>
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-black/30 rounded-xl p-3 border border-border">
          <div className="bg-orange-500/20 p-2 rounded-lg">
            <Flame className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <div className="text-sm text-text-muted">Current Streak</div>
            <div className="font-bold text-xl">14 Days</div>
          </div>
        </div>
      </div>
    </BentoTile>
  )
}
