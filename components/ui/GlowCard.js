'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export default function GlowCard({ children, className, glowColor = '#8b5cf6', tilt = true }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-8deg', '8deg'])

  function onMouseMove(e) {
    if (!tilt) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : {}}
      className={cn('glass rounded-2xl p-6 relative overflow-hidden group', className)}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${glowColor}20, transparent 70%)` }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 0 1px ${glowColor}40` }}
      />
      <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
    </motion.div>
  )
}
