'use client'

import { useEffect, useRef, useState } from 'react'

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  useEffect(() => {
    type IdleWindow = Window &
      typeof globalThis & {
        requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
        cancelIdleCallback?: (handle: number) => void
      }

    const win = window as IdleWindow
    let timeoutId: number | undefined
    let idleId: number | undefined

    const queueVideoLoad = () => {
      if (win.requestIdleCallback) {
        idleId = win.requestIdleCallback(() => setShouldLoadVideo(true), { timeout: 1500 })
      } else {
        timeoutId = window.setTimeout(() => setShouldLoadVideo(true), 700)
      }
    }

    if (document.readyState === 'complete') {
      queueVideoLoad()
    } else {
      window.addEventListener('load', queueVideoLoad, { once: true })
    }

    return () => {
      window.removeEventListener('load', queueVideoLoad)
      if (idleId !== undefined && win.cancelIdleCallback) {
        win.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    if (!shouldLoadVideo) return

    const video = videoRef.current
    if (!video) return

    const sessionPlayed = sessionStorage.getItem('home-video-played')

    const showLastFrame = () => {
      if (video && isFinite(video.duration)) {
        video.currentTime = Math.max(video.duration - 0.05, 0)
      }
    }

    if (sessionPlayed) {
      video.load()
      if (video.readyState >= 1) {
        showLastFrame()
      } else {
        video.addEventListener('loadedmetadata', showLastFrame, { once: true })
      }
      return
    }

    video.load()
    video.play().catch(() => {
      setShowPlayButton(true)
    })

    const handleEnded = () => {
      sessionStorage.setItem('home-video-played', 'true')
      setShowPlayButton(false)
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadedmetadata', showLastFrame)
    }
  }, [shouldLoadVideo])

  const handlePlayClick = () => {
    const video = videoRef.current
    if (video) {
      video.play()
        .then(() => {
          setShowPlayButton(false)
        })
        .catch(err => {
          console.error("Failed to play video on click", err)
        })
    }
  }

  return (
    <div className="w-full max-w-64 mx-auto mb-12 md:mb-20 relative">
      <video
        ref={videoRef}
        className="w-full aspect-square object-cover rounded-lg shadow-lg"
        width={512}
        height={512}
        muted
        playsInline
        preload={shouldLoadVideo ? "metadata" : "none"}
        controls={false}
      >
        {shouldLoadVideo ? <source src="/home_video.mp4" type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>

      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
          <button
            onClick={handlePlayClick}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 hover:scale-110"
            aria-label="Play video"
          >
            <svg
              className="w-8 h-8 text-gray-800 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
