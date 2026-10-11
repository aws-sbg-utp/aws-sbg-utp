import React from 'react'

export interface CtaButtonProps {
  variant?: 'primary' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  icon?: React.ReactNode | React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
  className?: string
  id?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export function CtaButton({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  onClick,
  children,
  className = '',
  id,
  type = 'button',
  ariaLabel,
}: CtaButtonProps) {
  const baseVariant = variant === 'primary' ? 'btn-primary' : 'btn-outline-white'
  const sizeClasses =
    size === 'sm'
      ? 'text-sm py-2 px-4'
      : size === 'lg'
        ? 'text-lg py-3.5 px-7'
        : 'text-base'

  const combinedClasses = `${baseVariant} ${sizeClasses} ${className}`.trim()

  const renderedIcon = (() => {
    if (!icon) return null
    if (React.isValidElement(icon)) return icon
    if (typeof icon === 'function') {
      const IconComponent = icon as React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
      const iconSize = size === 'sm' ? 14 : 18
      return <IconComponent size={iconSize} aria-hidden="true" />
    }
    return null
  })()

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    const resolvedTarget = target ?? (isExternal ? '_blank' : undefined)
    const resolvedRel = rel ?? (resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined)

    return (
      <a
        href={href}
        target={resolvedTarget}
        rel={resolvedRel}
        className={combinedClasses}
        id={id}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
        {renderedIcon}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
      {renderedIcon}
    </button>
  )
}

export default CtaButton
