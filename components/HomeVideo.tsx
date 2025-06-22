'use client'

import { useEffect, useRef, useState } from 'react'

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasEnded, setHasEnded] = useState(false)
  const [canAutoplay, setCanAutoplay] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayedInSession, setHasPlayedInSession] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set Safari-specific attributes directly on the DOM element
    video.setAttribute('webkit-playsinline', 'true')
    video.setAttribute('playsinline', 'true')
    
    // Check if video has already been played in this session
    const sessionPlayed = sessionStorage.getItem('home-video-played')
    if (sessionPlayed) {
      setHasPlayedInSession(true)
      setHasEnded(true)
      
      const showLastFrame = () => {
        if (video && isFinite(video.duration)) {
          video.currentTime = video.duration
        }
      }

      // If metadata is already loaded (e.g., from cache), set the last frame.
      // Otherwise, add a one-time event listener to do it when metadata loads.
      if (video.readyState >= 1) { // HAVE_METADATA or greater
        showLastFrame()
      } else {
        video.addEventListener('loadedmetadata', showLastFrame, { once: true })
      }
      return
    }

    const handleEnded = () => {
      setHasEnded(true)
      setIsPlaying(false)
      // Keep the video at the last frame
      video.currentTime = video.duration
      // Mark as played in this session
      sessionStorage.setItem('home-video-played', 'true')
      setHasPlayedInSession(true)
    }

    const handlePlay = () => {
      setIsPlaying(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleLoadedMetadata = () => {
      // Safari-specific: ensure video is ready before attempting autoplay
      if (!hasPlayedInSession) {
        // Check if we're on Safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        
        if (isSafari) {
          // Safari often requires a longer delay and different approach
          setTimeout(() => {
            // Try to set currentTime to 0 first (Safari requirement)
            video.currentTime = 0
            video.play()
              .then(() => {
                setCanAutoplay(true)
              })
              .catch((error) => {
                console.log('Safari autoplay prevented:', error.message)
                setCanAutoplay(false)
              })
          }, 200)
        } else {
          // For other browsers
          setTimeout(() => {
            video.play()
              .then(() => {
                setCanAutoplay(true)
              })
              .catch((error) => {
                console.log('Autoplay prevented:', error.message)
                setCanAutoplay(false)
              })
          }, 100)
        }
      }
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [hasPlayedInSession])

  const handlePlayClick = () => {
    const video = videoRef.current
    if (video && !hasPlayedInSession) {
      // For Safari, ensure currentTime is set to 0 before playing
      video.currentTime = 0
      video.play()
        .then(() => {
          setCanAutoplay(true)
        })
        .catch((error) => {
          console.error('Failed to play video:', error)
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
        preload="metadata"
        controls={false}
      >
        <source src="/home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play button overlay - only show if autoplay failed, video hasn't ended, and hasn't been played in session */}
      {!canAutoplay && !isPlaying && !hasEnded && !hasPlayedInSession && (
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