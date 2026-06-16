import { Suspense } from 'react'
import { HeroTile } from '@/components/dashboard/HeroTile'
import { ActivityTile } from '@/components/dashboard/ActivityTile'
import { CourseList } from '@/components/dashboard/CourseList'
import { SkeletonLoader } from '@/components/dashboard/SkeletonLoader'

export default function Home() {
  return (
    <main className="p-6 md:p-10 max-w-7xl mx-auto w-full relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      
      <header className="mb-8 flex items-center justify-between relative z-10">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-primary cursor-pointer border-2 border-transparent hover:border-white/20 transition-all shadow-lg" />
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min relative z-10">
        <HeroTile delay={1} />
        <ActivityTile delay={2} />
        <Suspense fallback={<SkeletonLoader count={4} />}>
          <CourseList />
        </Suspense>
      </section>
    </main>
  )
}
