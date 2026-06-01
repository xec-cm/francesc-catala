import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const meta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/meta' }),
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
    workDays: z.array(z.number()).optional(),
    workHoursStart: z.number().optional(),
    workHoursEnd: z.number().optional(),
    timezone: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
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

export const collections = {
  blog,
  meta,
  projects,
};
