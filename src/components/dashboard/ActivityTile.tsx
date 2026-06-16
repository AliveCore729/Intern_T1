import { BentoTile } from '@/components/ui/BentoTile'
import { Activity } from 'lucide-react'

export function ActivityTile({ delay = 0 }: { delay?: number }) {
  // Mock activity data for the graph
  const activityData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
  const maxVal = Math.max(...activityData)

  return (
    <BentoTile delay={delay} className="col-span-1 md:col-span-2 h-64 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Learning Activity
        </h2>
        <span className="text-xs text-text-muted bg-surface-hover px-2 py-1 rounded-md">Last 30 days</span>
      </div>
      
      <div className="flex-1 flex items-end gap-1 sm:gap-2">
        {activityData.map((val, i) => {
          const heightPercent = (val / maxVal) * 100
          // Add a simple color scale based on height
          const colorClass = heightPercent > 70 ? 'bg-primary' : heightPercent > 30 ? 'bg-primary/60' : 'bg-primary/20'
          return (
            <div key={i} className="flex-1 flex flex-col justify-end h-full group/bar relative">
              <div 
                className={`w-full rounded-t-sm transition-all duration-300 group-hover/bar:bg-purple-500 ${colorClass}`}
                style={{ height: `${Math.max(heightPercent, 10)}%` }}
              />
            </div>
          )
        })}
      </div>
    </BentoTile>
  )
}
