'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading,
  icon,
  ...props
}) {
  const base = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none overflow-hidden'

  const variants = {
    primary: 'btn-primary text-white px-6 py-3',
    secondary: 'glass text-[var(--text)] hover:border-[rgba(124,58,237,0.4)]',
    ghost: 'text-[var(--text2)] hover:text-[var(--text)]',
    danger: 'text-red-400 border border-red-500',
    outline: 'border border-[rgba(124,58,237,0.4)] text-[var(--primary-muted)]',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
    xl: 'text-lg px-10 py-5',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white rounded-full animate-spin" style={{ borderTopColor: 'transparent' }} />
      ) : icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}
      {children}
    </motion.button>
  )
}
