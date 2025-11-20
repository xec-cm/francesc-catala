# Open Graph Image Guide

## What you need to create

You need to create a file named `og-image.jpg` (or `og-image.png`) in this `/public` directory.

## Image Specifications

- **Size**: 1200 × 630 pixels (ratio 1.91:1)
- **Format**: JPG or PNG (max 8MB, but keep it under 1MB for fast loading)
- **File name**: `og-image.jpg` or `og-image.png`
- **Location**: `/public/og-image.jpg`

## Design Recommendations

Your Open Graph image should include:

1. **Your photo/headshot** - from your hero section
2. **Your name**: Francesc Català-Moll
3. **Your tagline**: "Uncovering microbiome–immune system interactions through AI"
4. **Brand color**: Use your primary green (#617056)
5. **Background**: Clean, professional (white or subtle gradient)

### Layout Example:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Photo]    Francesc Català-Moll               │
│             Bioinformatics & AI                 │
│             Microbiome-Immune Interactions      │
│                                                 │
│             francesccatala.com                  │
└─────────────────────────────────────────────────┘
```

## Tools to Create the Image

### Option 1: Canva (Easiest)
1. Go to canva.com
2. Create custom size: 1200 × 630 px
3. Use their templates or design from scratch
4. Export as JPG

### Option 2: Figma (Professional)
1. Create frame: 1200 × 630 px
2. Design your layout
3. Export as JPG or PNG

### Option 3: Photoshop/GIMP
1. New document: 1200 × 630 px, 72 DPI
2. Design your layout
3. Save for web as JPG

## Testing Your Image

Once you create and place the image at `/public/og-image.jpg`, you can test it:

1. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/

## Current Status

✅ Open Graph meta tags are already configured in your Layout
✅ Blog posts will use their featured images automatically
✅ All pages will fall back to `/og-image.jpg` if no specific image is provided

❌ **TODO**: Create the default `/public/og-image.jpg` file

## Per-Page Customization

If you want specific pages to have custom OG images, you can pass the `image` prop:

```astro
<Layout
  title="My Page Title"
  description="My page description"
  image="/custom-og-image.jpg"
/>
```
