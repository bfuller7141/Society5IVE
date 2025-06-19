import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      cover: z.string(),
      caseStudy: z.string(),
      gallery: z.array(z.string()),
    }),
  }),
  reviews: defineCollection({
    schema: z.object({
      reviewText: z.string(),
    }),
  }),
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      image: z.string(),
      excerpt: z.string(),
      date: z.date(),
    }),
  }),
};
