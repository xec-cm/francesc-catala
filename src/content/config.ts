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
    tagline: z.string().optional(),
    email: z.string().optional(),
    location: z.string().optional(),
    responseTime: z.string().optional(),
    availabilityLabel: z.string().optional(),
    availableText: z.string().optional(),
    unavailableText: z.string().optional(),
    workDays: z.array(z.number()).optional(), // 1=Monday, 7=Sunday
    workHoursStart: z.number().optional(), // 0-23
    workHoursEnd: z.number().optional(), // 0-23
    timezone: z.string().optional(),
  }),
});

// Projects collection schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    short_description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    order: z.number(),
    size: z.enum(['normal', 'wide', 'tall']).optional().default('normal'),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  publications: publicationsCollection,
  meta: metaCollection,
  projects: projectsCollection,
};
