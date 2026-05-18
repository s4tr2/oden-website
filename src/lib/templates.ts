import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Template } from '@/types'
import { slugify } from './utils'

export interface Heading {
  level: number
  text: string
  id: string
}

import { cache } from 'react'

const templatesDirectory = path.join(process.cwd(), 'src/data/templates')
const templateDisplayOrder = [
  'messaging-framework-template',
  'gtm-plan-template',
  'gtm-roadmap-template',
  'product-launch-checklist-template',
  'competitive-intelligence-tracker',
  'battle-card-template',
  'win-loss-analysis-template',
  'customer-story-template',
] as const

export const getAllTemplates = cache((includeContent = false): Template[] => {
  const fileNames = fs.readdirSync(templatesDirectory)
  const allTemplatesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(templatesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content: includeContent ? content : undefined,
        date: data.date,
        tags: data.tags || [],
        templateFile: data.templateFile,
      }
    })

  return allTemplatesData.sort((a, b) => {
    const aIndex = templateDisplayOrder.indexOf(a.slug as (typeof templateDisplayOrder)[number])
    const bIndex = templateDisplayOrder.indexOf(b.slug as (typeof templateDisplayOrder)[number])

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex
    }

    if (aIndex !== -1) {
      return -1
    }

    if (bIndex !== -1) {
      return 1
    }

    return a.title.localeCompare(b.title)
  })
})

export const getTemplateBySlug = cache((slug: string): Template | null => {
  try {
    const fullPath = path.join(templatesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date,
      tags: data.tags || [],
      templateFile: data.templateFile,
    }
  } catch {
    return null
  }
})

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = slugify(text)
    headings.push({ level, text, id })
  }

  return headings
}
