import React from 'react'

export interface SectionTagProps {
  children?: React.ReactNode
  label?: string
  variant?: 'dark' | 'light'
  hasDot?: boolean
  className?: string
}

export function SectionTag({
  children,
  label,
  variant = 'dark',
  hasDot = false,
  className = '',
}: SectionTagProps) {
  const baseClass = variant === 'dark' ? 'tag-mono' : 'tag-mono-dark'
  const dotColor = variant === 'dark' ? 'bg-[#44b4ff]' : 'bg-[#1a6fa0]'
  const content = label ?? children

  return (
    <span className={`${baseClass} ${className}`.trim()}>
      {hasDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse flex-shrink-0`}
          aria-hidden="true"
        />
      )}
      {content}
    </span>
  )
}

export default SectionTag
