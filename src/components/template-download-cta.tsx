"use client"

import { useState } from "react"
import { EmailCaptureModal } from "./email-capture-modal"

interface TemplateDownloadCTAProps {
  templateFile: string
  templateTitle: string
  templateSlug: string
}

export function TemplateDownloadCTA({ 
  templateFile, 
  templateTitle,
  templateSlug 
}: TemplateDownloadCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "success" | "error">("idle")

  const handleSuccess = async (email: string): Promise<string | null> => {
    setDownloadStatus("downloading")
    
    try {
      const blogUrl = typeof window !== "undefined" ? window.location.href : ""
      const response = await fetch("https://api.getoden.com/api/template-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "YvVlfSWpvebO8AU6QKjWMO1g1Gt5Zjym",
        },
        body: JSON.stringify({
          email,
          templateSlug,
          blogUrl,
        }),
      })
      
      if (!response.ok) {
        const data = await response.json()
        setDownloadStatus("idle")
        return data.detail || "Something went wrong. Please try again."
      }
      
      // Only download on 200
      const link = document.createElement("a")
      link.href = templateFile
      link.download = templateFile.split("/").pop() || "template"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setDownloadStatus("success")
      setIsModalOpen(false)
      setTimeout(() => setDownloadStatus("idle"), 3000)
      return null
    } catch {
      setDownloadStatus("error")
      setTimeout(() => setDownloadStatus("idle"), 3000)
      return "Something went wrong. Please try again."
    }
  }

  return (
    <>
      <div
        id="download"
        className="my-10 p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Download the {templateTitle}
            </h3>
            <p className="text-gray-600 text-sm">
              Get the ready-to-use Excel template and start putting it to work today.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={downloadStatus === "downloading"}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
          >
            {downloadStatus === "downloading" ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Downloading...
              </>
            ) : downloadStatus === "success" ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Downloaded!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Template
              </>
            )}
          </button>
        </div>
        
        {downloadStatus === "error" && (
          <p className="mt-4 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
        templateTitle={templateTitle}
      />
    </>
  )
}
