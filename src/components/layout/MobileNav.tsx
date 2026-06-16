'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'activity', label: 'Activity', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function MobileNav() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-border z-50 pb-[env(safe-area-inset-bottom)]">
      <ul className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <li key={item.id} className="relative flex-1 h-full py-1">
            <button
              onClick={() => setActiveItem(item.id)}
              className={cn(
                "w-full h-full flex flex-col items-center justify-center transition-colors relative z-10 rounded-xl",
                activeItem === item.id ? "text-white" : "text-text-muted hover:text-text-main"
              )}
            >
              {activeItem === item.id && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="absolute inset-0 bg-surface-hover rounded-xl border border-border"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <item.icon className="w-5 h-5 relative z-20 mb-1" />
              <span className="text-[10px] font-medium relative z-20">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
