import { useState, useRef, useEffect } from 'react'
import cn from '../../lib/class-names'
import BaseLink from './base-link'
import { gsap } from 'gsap'
import ILinkProps from '../../types/link-props'
import ChevronRightIcon from '../icons/chevron-right'

const IndexLink = ({ href, aria, className, children }: ILinkProps) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        iconEl.current,
        { x: hover ? '0.15rem' : 0, ease: 'power3.out', duration: 0.2 },
        0
      )
  }, [hover])

  const _handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const _handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <BaseLink
      href={href}
      aria={aria}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      className={cn('flex flex-row items-center', className)}
    >
      {children}

      <div ref={iconEl} className="w-2 ml-2">
        <ChevronRightIcon />
      </div>
    </BaseLink>
  )
}

export default IndexLink
