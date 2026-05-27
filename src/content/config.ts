import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['qa', 'game-design', 'development']),
    tags: z.array(z.string()),
    date: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = { projects };
