"use client"

import { useEffect } from "react"

function getFrameHeight(iframe: HTMLIFrameElement) {
  const doc = iframe.contentDocument

  if (!doc) {
    return 0
  }

  const root = doc.documentElement
  const body = doc.body

  return Math.ceil(
    Math.max(root.scrollHeight, root.offsetHeight, body?.scrollHeight ?? 0, body?.offsetHeight ?? 0),
  )
}

export function BoltzgenFragmentResizer() {
  useEffect(() => {
    const iframes = Array.from(document.querySelectorAll<HTMLIFrameElement>("iframe.boltzgen-fragment"))
    const cleanup: Array<() => void> = []

    const resize = (iframe: HTMLIFrameElement) => {
      try {
        const height = getFrameHeight(iframe)

        if (height > 0) {
          iframe.style.height = `${height}px`
        }
      } catch {
        // The fragments are same-origin; this only guards against partial iframe lifecycle states.
      }
    }

    iframes.forEach((iframe) => {
      iframe.setAttribute("scrolling", "no")

      const onLoad = () => {
        resize(iframe)

        const frameWindow = iframe.contentWindow
        const frameDocument = iframe.contentDocument

        if (!frameWindow || !frameDocument) {
          return
        }

        let animationFrame = 0
        const scheduleResize = () => {
          window.cancelAnimationFrame(animationFrame)
          animationFrame = window.requestAnimationFrame(() => resize(iframe))
        }

        frameWindow.addEventListener("resize", scheduleResize)
        cleanup.push(() => {
          frameWindow.removeEventListener("resize", scheduleResize)
          window.cancelAnimationFrame(animationFrame)
        })

        if ("ResizeObserver" in window) {
          const observer = new ResizeObserver(scheduleResize)
          observer.observe(frameDocument.documentElement)

          if (frameDocument.body) {
            observer.observe(frameDocument.body)
          }

          cleanup.push(() => observer.disconnect())
        }

        const interval = window.setInterval(scheduleResize, 1000)
        window.setTimeout(scheduleResize, 100)
        window.setTimeout(scheduleResize, 500)
        cleanup.push(() => window.clearInterval(interval))
      }

      iframe.addEventListener("load", onLoad)
      cleanup.push(() => iframe.removeEventListener("load", onLoad))

      if (iframe.contentDocument?.readyState === "complete") {
        onLoad()
      }
    })

    const onWindowResize = () => iframes.forEach(resize)
    window.addEventListener("resize", onWindowResize)
    cleanup.push(() => window.removeEventListener("resize", onWindowResize))

    return () => {
      cleanup.forEach((dispose) => dispose())
    }
  }, [])

  return null
}
