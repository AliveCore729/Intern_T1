'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoTileProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  delay?: number
}

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 24,
    }
  })
}

export function BentoTile({ children, className, delay = 0, ...props }: BentoTileProps) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}
