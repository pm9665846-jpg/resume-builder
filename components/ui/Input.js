'use client'
import { cn } from '@/lib/utils'

export default function Input({ label, error, className, textarea, ...props }) {
  const base = 'input-glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500'

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          className={cn(base, 'resize-none min-h-[100px]', className)}
          {...props}
        />
      ) : (
        <input className={cn(base, className)} {...props} />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
