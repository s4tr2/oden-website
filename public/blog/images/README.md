# Blog Images Directory

This directory stores images for blog posts, organized by post name.

## Best Practice Organization

**Keep images organized by blog post:**

```
/public/blog/images/
  ├── my-first-post/
  │   ├── hero.jpg
  │   ├── screenshot-1.png
  │   └── diagram.png
  ├── my-second-post/
  │   └── cover-image.jpg
  └── test-media-features/
      └── screen.png
```

## Usage

### Adding Images to Blog Posts

1. **Create a folder** for your blog post: `/public/blog/images/your-post-slug/`
2. **Upload images** to that folder
3. **Reference them in your markdown** file:
   ```markdown
   ![Alt text describing the image](/blog/images/your-post-slug/your-image.jpg)
   ```

### Example

For a blog post at `/src/data/blog/product-launch-guide.md`:

1. Create folder: `/public/blog/images/product-launch-guide/`
2. Add images: `hero.jpg`, `step-1.png`, `step-2.png`
3. Reference in markdown:

```markdown
![Product Launch Hero](/blog/images/product-launch-guide/hero.jpg)

## Step 1
![First step screenshot](/blog/images/product-launch-guide/step-1.png)

## Step 2
![Second step screenshot](/blog/images/product-launch-guide/step-2.png)
```

### Image Features

- **Responsive**: Automatically sized to fit the content width
- **Styled**: Rounded corners with shadow effect
- **Optimized**: Lazy loading for better performance
- **Captioned**: Alt text appears as a caption below the image

### Recommended Image Specifications

- **Format**: JPG, PNG, or WebP
- **Width**: 1200-1600px (optimal for retina displays)
- **File Size**: Keep under 500KB for good performance
- **Naming**: Use descriptive kebab-case names (e.g., `analytics-dashboard.png`)

### Supported Formats

- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`
- `.svg`

## Tips

- **Naming convention**: Use descriptive names like `hero.jpg`, `screenshot-1.png`, `diagram-architecture.png`
- **File size**: Keep images under 500KB for good performance (optimize with tools like TinyPNG)
- **Consistency**: Use the same naming pattern across all posts

