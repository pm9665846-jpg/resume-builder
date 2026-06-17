'use client'
import { cn } from '@/lib/utils'

export default function Input({ label, error, className, textarea, type, ...props }) {
  const isMonth = type === 'month' || type === 'date'
  const base = cn(
    'input-glass w-full rounded-xl px-4 py-3 text-sm',
    isMonth && 'input-month',
    'text-[var(--text)] placeholder:text-[var(--text3)]'
  )

  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="form-label">{label}</label>}
      {textarea ? (
        <textarea
          className={cn(base, 'resize-none min-h-[100px]', className)}
          {...props}
        />
      ) : (
        <input type={type} className={cn(base, className)} {...props} />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
