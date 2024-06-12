import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: z.object({
        image: image().refine((img) => img.width >= 600, {
          message: 'Image must be at least 600px wide',
        }),
        altText: z.string(),
      }),
    }),
});

const aboutUs = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

export const collections = { blog, aboutUs };
