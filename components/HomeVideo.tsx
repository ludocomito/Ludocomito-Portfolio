'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEO_POSTER = '/optimized/home-video-poster.webp'
const VIDEO_SRC = '/optimized/home-video.mp4'

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPlayButton, setShowPlayButton] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {
      setShowPlayButton(true)
    })

    const handleEnded = () => {
      setShowPlayButton(false)
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
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
        className="w-full aspect-square object-cover rounded-lg shadow-lg"
        width={512}
        height={512}
        muted
        autoPlay
        playsInline
        poster={VIDEO_POSTER}
        preload="auto"
        controls={false}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
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
