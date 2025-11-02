"use client"

import React from "react"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { webhookUrl?: string }

const CvDownloadButton = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, href = "/documents/Mihail-Alexandru-CV.pdf", webhookUrl = "http://n8n.mihaif.xyz/webhook/cv-download", ...props }, ref) => {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      e.preventDefault()

      try {
        // Image ping to send a GET request to the webhook without CORS issues
        const img = new Image()
        img.src = `${webhookUrl}?ts=${Date.now()}`
      } catch (err) {
        // swallow
      }

      // trigger the download programmatically so user only sees the file save dialog
      const link = document.createElement("a")
      link.href = href
      link.download = ""
      document.body.appendChild(link)
      // small timeout to allow the ping to fire
      setTimeout(() => {
        link.click()
        link.remove()
      }, 120)
    }

    return (
      <a ref={ref} href={href} {...props} onClick={handleClick}>
        {children}
      </a>
    )
  }
)

CvDownloadButton.displayName = "CvDownloadButton"

export default CvDownloadButton
