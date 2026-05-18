import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types'
import { slugify } from './utils'
import { isExcludedSlug } from './excluded-posts'

export interface Heading {
  level: number
  text: string
  id: string
}

import { cache } from 'react'

const postsDirectory = path.join(process.cwd(), 'src/data/blog')

export const getAllPosts = cache((includeContent = false): BlogPost[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .filter((fileName) => !isExcludedSlug(fileName.replace(/\.md$/, '')))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        metaTitle: data.metaTitle,
        excerpt: data.excerpt,
        content: includeContent ? content : undefined,
        date: data.date,
        tags: data.tags || [],
        category: data.category || 'Tool Comparisons',
        featured: data.featured || false,
        thumbnail: data.thumbnail,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
})

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      metaTitle: data.metaTitle,
      excerpt: data.excerpt,
      content,
      date: data.date,
      tags: data.tags || [],
      category: data.category || 'Tool Comparisons',
      featured: data.featured || false,
      thumbnail: data.thumbnail,
    }
  } catch {
    return null
  }
})

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export const getAllCategories = cache((): string[] => {
  const posts = getAllPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories).sort()
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
