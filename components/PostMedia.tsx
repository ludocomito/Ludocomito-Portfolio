'use client'

import { useEffect, useRef } from 'react'

type PostMediaProps = {
  poster: string
  video?: string
  alt: string
  className?: string
  // Use a frame this many seconds in as the still, for videos whose poster is blank
  stillAt?: number
}

// Shows a post's image, or a muted looping video peek that only plays while on screen.
export default function PostMedia({ poster, video, alt, className = '', stillAt }: PostMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (!video) {
    return <img src={poster} alt={alt} loading="lazy" className={`absolute inset-0 w-full h-full object-cover ${className}`} />
  }

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      poster={stillAt === undefined ? poster : undefined}
      muted
      loop
      playsInline
      preload={stillAt === undefined ? 'none' : 'metadata'}
      aria-label={alt}
    >
      <source src={stillAt === undefined ? video : `${video}#t=${stillAt}`} type="video/mp4" />
    </video>
  )
}
