"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title: string
  posterSrc?: string
}

export const VideoModal = ({ isOpen, onClose, videoSrc, title, posterSrc }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Use direct DOM event handlers on the <video> element (attached in JSX)
  // This avoids timing issues when adding/removing listeners and ensures
  // the UI updates reliably while dragging the seek bar.

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (video.paused) {
        await video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    } catch (err) {
      // play() can reject due to autoplay policies — fallback to setting state
      console.warn('Video play failed', err)
      setIsPlaying(!video.paused)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    const newMuted = !video.muted
    video.muted = newMuted
    setIsMuted(newMuted)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    const value = (e.target as HTMLInputElement).value
    const percent = parseFloat(value)
    if (isNaN(percent) || duration === 0) return
    const seekTime = (percent / 100) * duration
    video.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleClose = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTime(0)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl p-0 bg-black border-0">
        <DialogHeader className="absolute top-4 left-4 z-10">
          <DialogTitle className="text-white text-lg font-semibold">
            {title} - Demo Video
          </DialogTitle>
        </DialogHeader>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={handleClose}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="relative group">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[70vh] object-contain"
            poster={posterSrc}
            preload="metadata"
            onLoadedMetadata={(e) => setDuration((e.target as HTMLVideoElement).duration || 0)}
            onTimeUpdate={(e) => setCurrentTime((e.target as HTMLVideoElement).currentTime || 0)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Controls Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${!isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>

                <div className="flex-1 flex items-center gap-2">
                  <span className="text-white text-sm">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                    onInput={handleSeek}
                    aria-label="Seek"
                    className="flex-1 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white text-sm">{formatTime(duration)}</span>
                </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => videoRef.current?.requestFullscreen()}
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Play button overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                onClick={togglePlay}
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
