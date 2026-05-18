/**
 * Robots.txt Configuration for Oden
 * 
 * Accessible at: https://getoden.com/robots.txt
 * 
 * This file allows all specified AI/LLM crawlers and search engines
 * to index and crawl the website.
 */

export default function robots() {
  return {
    rules: [
      // OPENAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User/2.0',
        allow: '/',
      },
      
      // ANTHROPIC / CLAUDE
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'claude-web',
        allow: '/',
      },
      
      // PERPLEXITY
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
      },
      
      // GOOGLE
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      
      // MICROSOFT
      {
        userAgent: 'BingBot',
        allow: '/',
      },
      
      // AMAZON
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
      
      // APPLE
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      
      // META
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
      
      // LINKEDIN
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      
      // BYTEDANCE
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      
      // DUCKDUCKGO
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
      },
      
      // COMMON CRAWL
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      
      // Catch-all (allows all other crawlers)
      {
        userAgent: '*',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://getoden.com/sitemap.xml',
  }
}
