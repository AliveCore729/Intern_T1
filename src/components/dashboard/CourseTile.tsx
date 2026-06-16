'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BentoTile } from '@/components/ui/BentoTile'
import { DynamicIcon } from '@/components/ui/DynamicIcon'
import { Database } from '@/types/supabase'

type Course = Database['public']['Tables']['courses']['Row']

interface CourseTileProps {
  course: Course
  delay?: number
}

export function CourseTile({ course, delay = 0 }: CourseTileProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(course.progress)
    }, 500 + delay * 100)
    
    return () => clearTimeout(timer)
  }, [course.progress, delay])

  return (
    <BentoTile delay={delay} className="flex flex-col justify-between h-48">
      <div className="flex items-center gap-4">
        <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
          <DynamicIcon name={course.icon_name} className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 leading-tight">{course.title}</h3>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-muted">Progress</span>
          <span className="font-bold">{progress}%</span>
        </div>
        <div className="h-2 w-full bg-surface-hover rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        </div>
      </div>
    </BentoTile>
  )
}
