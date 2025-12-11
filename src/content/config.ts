import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    // Pitch deck slide ordering
    order: z.number().optional(),
  }),
});

export const collections = {
  docs: docsCollection,
};
