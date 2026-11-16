import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        year: z.number(),
        role: z.string(),
        timeline: z.string().optional(),
        stack: z.array(z.string()),
        featured: z.boolean().default(false),
        order: z.number().default(0),
        // Put images next to the .md file, e.g. cover: ./ledger.png
        cover: image().optional(),
        coverAlt: z.string().optional(),
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .refine((d) => !d.cover || !!d.coverAlt, {
        message: 'coverAlt is required when cover is set',
        path: ['coverAlt'],
      }),
});

export const collections = { projects };
