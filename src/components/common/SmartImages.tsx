import { useState } from 'react'
import { cn } from '../../lib/utils'

interface SmartImageProps {
  src?: string
  alt: string
  className?: string
  /** Texte affiché si l'image est absente (par défaut : alt) */
  label?: string
  /** true pour l'image principale visible dès le chargement */
  priority?: boolean
}

export default function SmartImage({ src, alt, className, label, priority }: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'bg-diamonds flex items-center justify-center bg-gradient-to-br from-primary to-night p-4 text-center font-display text-lg font-bold text-night-foreground/90',
          className,
        )}
      >
        {label ?? alt}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  )
}