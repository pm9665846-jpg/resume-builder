'use client'
import { motion } from 'framer-motion'

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.4 }} />

      {/* Orbs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{
          top: '25%', left: '25%',
          width: '384px', height: '384px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute rounded-full"
        style={{
          top: '75%', right: '25%',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
        className="absolute rounded-full"
        style={{
          top: '50%', right: '33%',
          width: '256px', height: '256px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: '#a78bfa',
            left: `${8 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
        />
      ))}
    </div>
  )
}
