import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface MarqueeProps {
  children: ReactNode
  className?: string
}

/** Bandeau défilant en boucle (pause au survol). */
export default function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn('group flex overflow-hidden', className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 pr-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {children}
        </div>
      ))}
    </div>
  )
}