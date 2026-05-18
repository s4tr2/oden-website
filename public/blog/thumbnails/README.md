# Blog Thumbnails Directory

This directory stores thumbnail images for blog posts (for use in blog listings and social sharing).

## Usage

### Adding Thumbnails to Blog Posts

1. **Upload your thumbnail** to this directory (`/public/blog/thumbnails/`)
2. **Add to frontmatter** in your markdown file:
   ```markdown
   ---
   title: "Your Blog Post Title"
   excerpt: "Post description..."
   date: "2025-11-05"
   tags: ["Tag1", "Tag2"]
   thumbnail: "/blog/thumbnails/your-post-thumbnail.jpg"
   ---
   ```

### Recommended Thumbnail Specifications

- **Aspect Ratio**: 16:9 or 1200x630 (optimal for social sharing)
- **Format**: JPG or PNG
- **File Size**: Keep under 200KB
- **Naming**: Match your blog post slug (e.g., `ai-product-marketing-trends.jpg`)

### Example

For a blog post with slug `data-driven-marketing`:

1. Create thumbnail: `/public/blog/thumbnails/data-driven-marketing.jpg`
2. Add to frontmatter:
   ```yaml
   ---
   title: "Data-Driven Marketing Strategies"
   thumbnail: "/blog/thumbnails/data-driven-marketing.jpg"
   ---
   ```

## Thumbnail Best Practices

- **Text**: Keep text large and readable (minimum 48px)
- **Branding**: Include logo or brand colors
- **Contrast**: Ensure good contrast for readability
- **Mobile**: Design works well even at small sizes
- **Format**: JPG for photos, PNG for graphics with transparency

## Social Media Optimization

These thumbnails will appear when your blog posts are shared on:
- Facebook
- Twitter/X
- LinkedIn
- Slack
- Discord

Optimal size: **1200 x 630 pixels**

