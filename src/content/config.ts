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
      draft: z.boolean().optional(),
      cover: z.object({
        src: image().refine((img) => img.width >= 600, {
          message: 'Image must be at least 600px wide',
        }),
        alt: z.string(),
      }),
    }),
});

const aboutMe = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z
        .object({
          src: image().refine((img) => img.width >= 600, {
            message: 'Image must be at least 600px wide',
          }),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = { blog, aboutMe };
