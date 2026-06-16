import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function SkeletonLoader({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass-panel rounded-2xl p-6 h-48 flex flex-col justify-between animate-pulse">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-hover" />
            <div className="space-y-2">
              <div className="h-5 w-32 bg-surface-hover rounded-md" />
              <div className="h-4 w-24 bg-surface-hover rounded-md" />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <div className="h-4 w-16 bg-surface-hover rounded-md" />
              <div className="h-4 w-8 bg-surface-hover rounded-md" />
            </div>
            <div className="h-2 w-full bg-surface-hover rounded-full" />
          </div>
        </div>
      ))}
    </>
  )
}
