import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// Projects collection schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    image: z.string(),
    year: z.number(),
    techStack: z.array(z.string()),
    link: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Publications collection schema
const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Meta/Pages collection schema
// This collection will hold metadata for static pages like About, Contact, etc.
const metaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  publications: publicationsCollection,
  meta: metaCollection,
};
