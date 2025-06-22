'use client'

import { useEffect, useRef, useState } from 'react'

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPlayButton, setShowPlayButton] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const sessionPlayed = sessionStorage.getItem('home-video-played')

    const showLastFrame = () => {
      if (video && isFinite(video.duration)) {
        video.currentTime = video.duration
      }
    }

    if (sessionPlayed) {
      if (video.readyState >= 1) { // HAVE_METADATA
        showLastFrame()
      } else {
        video.addEventListener('loadedmetadata', showLastFrame, { once: true })
      }
      return
    }
    
    // The `autoplay` attribute should handle this, but we can have this as a fallback.
    // The `.catch()` is important to prevent unhandled promise rejection errors.
    video.play().catch(() => {
      // If autoplay fails, show the play button.
      setShowPlayButton(true)
    })

    const handleEnded = () => {
      sessionStorage.setItem('home-video-played', 'true')
      setShowPlayButton(false) // Hide button if it was visible
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadedmetadata', showLastFrame)
    }
  }, [])

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
        className="w-full h-auto rounded-lg shadow-lg"
        muted
        playsInline
        autoPlay // Using the attribute is more declarative and often more reliable
        preload="metadata"
        controls={false}
      >
        <source src="/home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Show play button overlay if autoplay fails */}
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