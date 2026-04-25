import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Options = {
  y?: number
  duration?: number
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useScrollReveal(
  rootRef: React.RefObject<HTMLElement | null>,
  options: Options = {},
) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (prefersReducedMotion()) return

    const y = options.y ?? 16
    const duration = options.duration ?? 0.7

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')

      targets.forEach((el, idx) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y, filter: 'blur(6px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration,
            delay: Math.min(idx * 0.04, 0.22),
            ease: 'power2.out',
            overwrite: 'auto',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, root)

    return () => ctx.revert()
  }, [options.duration, options.y, rootRef])
}

