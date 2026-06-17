'use client'
import { useState, useRef, useEffect, Children, useId } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

function parseOptions(children) {
  return Children.toArray(children)
    .filter(child => child?.props?.value != null)
    .map(child => ({
      value: child.props.value,
      label: child.props.children ?? child.props.value,
    }))
}

export default function Select({
  label,
  error,
  className,
  wrapperClassName,
  children,
  value,
  onChange,
  disabled,
  placeholder = 'Select...',
}) {
  const menuId = useId()
  const [open, setOpen] = useState(false)
  const [menuRect, setMenuRect] = useState(null)
  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)
  const options = parseOptions(children)
  const selected = options.find(o => String(o.value) === String(value))

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current?.contains(e.target)) return
      const menu = document.getElementById(menuId)
      if (menu?.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!open || !triggerRef.current) return

    function updatePosition() {
      const rect = triggerRef.current.getBoundingClientRect()
      setMenuRect({
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width,
      })
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open])

  function handleSelect(val) {
    onChange?.({ target: { value: val } })
    setOpen(false)
  }

  const menu = open && menuRect && typeof document !== 'undefined' && createPortal(
    <ul
      id={menuId}
      className="custom-select-menu custom-select-menu-portal"
      role="listbox"
      style={{ top: menuRect.top, left: menuRect.left, width: menuRect.width }}
    >
      {options.map(opt => {
        const isSelected = String(value) === String(opt.value)
        return (
          <li key={opt.value} role="option" aria-selected={isSelected}>
            <button
              type="button"
              onClick={() => handleSelect(opt.value)}
              className={cn('custom-select-option', isSelected && 'custom-select-option-selected')}
            >
              <span>{opt.label}</span>
              {isSelected && <Check size={14} />}
            </button>
          </li>
        )
      })}
    </ul>,
    document.body
  )

  return (
    <div className={cn('flex flex-col gap-1.5', wrapperClassName)} ref={wrapperRef}>
      {label && <label className="form-label">{label}</label>}
      <div className="custom-select">
        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen(o => !o)}
          className={cn(
            'custom-select-trigger input-glass w-full rounded-xl px-4 py-3 text-sm',
            open && 'custom-select-trigger-open',
            className
          )}
        >
          <span className="truncate">{selected?.label ?? placeholder}</span>
          <ChevronDown
            size={16}
            className={cn('custom-select-chevron shrink-0', open && 'custom-select-chevron-open')}
            aria-hidden
          />
        </button>
        {menu}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
