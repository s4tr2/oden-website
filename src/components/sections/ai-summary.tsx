"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import Image from "next/image"

const PROMPT = `As a potential customer, I want to concretely understand what I will receive with oden (www.getoden.com).

Detail step by step what the service includes: what I receive, how AI-powered assets are created, how it is beneficial for me as a product marketer.

Explain it simply, as if you were describing the real experience of the service.`

interface LLM {
    name: string
    url: string
    image?: string
    formatUrl?: (prompt: string) => string
}

const llms: LLM[] = [
    {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        image: "/chatGPT.png",
        formatUrl: (prompt: string) => `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`
    },
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        image: "/perplexity.png",
        formatUrl: (prompt: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`
    },
    {
        name: "Gemini",
        url: "https://aistudio.google.com/prompts/new_chat",
        image: "/gemini.png",
        formatUrl: (prompt: string) => `https://aistudio.google.com/prompts/new_chat?prompt=${encodeURIComponent(prompt)}`
    },
    {
        name: "Claude",
        url: "https://claude.ai/new",
        image: "/claude.png",
        formatUrl: (prompt: string) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`
    },
]

export function AiSummary() {
    const [copied, setCopied] = useState<string | null>(null)

    const handleClick = async (llm: LLM) => {
        try {
            await navigator.clipboard.writeText(PROMPT)
            setCopied(llm.name)

            const url = llm.formatUrl ? llm.formatUrl(PROMPT) : llm.url
            window.open(url, '_blank')

            setTimeout(() => setCopied(null), 3000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
            const url = llm.formatUrl ? llm.formatUrl(PROMPT) : llm.url
            window.open(url, '_blank')
        }
    }

    return (
        <div className="space-y-3">
            <div className="text-zinc-500 text-sm">Request an AI summary of Oden</div>

            <div className="flex gap-4">
                {llms.map((llm) => (
                    <button
                        key={llm.name}
                        onClick={() => handleClick(llm)}
                        className={`group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 bg-zinc-800 overflow-hidden border border-zinc-700`}
                        aria-label={`Get summary from ${llm.name}`}
                        title={`Get summary from ${llm.name}`}
                    >
                        {copied === llm.name ? (
                            <Check className="w-5 h-5 text-green-600" />
                        ) : (
                            llm.image && (
                                <div className="relative w-full h-full p-2">
                                    <Image
                                        src={llm.image}
                                        alt={llm.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )
                        )}

                        {/* Tooltip on hover */}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {copied === llm.name ? 'Prompt Copied!' : llm.name}
                        </span>
                    </button>
                ))}
            </div>
            {copied && (
                <div className="text-xs text-green-600 font-medium animate-in fade-in slide-in-from-top-1">
                    Prompt copied! Paste it in the chat.
                </div>
            )}
        </div>
    )
}
