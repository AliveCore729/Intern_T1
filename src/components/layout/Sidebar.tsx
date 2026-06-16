'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart3, Settings, LogOut, Menu } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'activity', label: 'Activity', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav
      className={cn(
        "glass-panel border-r border-border flex flex-col justify-between py-6 transition-all duration-300 ease-in-out z-10",
        isExpanded ? "w-64" : "w-20",
        "hidden md:flex"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="px-4 flex flex-col gap-8">
        <div className="flex items-center justify-center md:justify-start md:px-2 h-10 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-600 flex-shrink-0 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span
            className={cn(
              "ml-3 font-bold text-xl whitespace-nowrap transition-opacity duration-300",
              isExpanded ? "opacity-100" : "opacity-0 hidden"
            )}
          >
            NextGen
          </span>
        </div>

        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-full flex items-center px-4 py-3 rounded-xl transition-colors relative z-10",
                  activeItem === item.id ? "text-white" : "text-text-muted hover:text-text-main"
                )}
              >
                {activeItem === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-surface-hover rounded-xl border border-border"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <item.icon className="w-5 h-5 flex-shrink-0 relative z-20" />
                <span
                  className={cn(
                    "ml-4 font-medium whitespace-nowrap relative z-20 transition-opacity duration-300",
                    isExpanded ? "opacity-100" : "opacity-0 hidden"
                  )}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4">
        <button className="w-full flex items-center px-4 py-3 rounded-xl text-text-muted hover:text-text-main hover:bg-surface-hover transition-colors">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span
            className={cn(
              "ml-4 font-medium whitespace-nowrap transition-opacity duration-300",
              isExpanded ? "opacity-100" : "opacity-0 hidden"
            )}
          >
            Logout
          </span>
        </button>
      </div>
    </nav>
  )
}
