import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    caseStudy: z.string(),
    gallery: z.array(z.string()),
  }),
});
const reviews = defineCollection({
  schema: z.object({
    reviewText: z.string(),
  }),
});
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    excerpt: z.string(),
    date: z.date(),
  }),
});
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    image: z.string(),
    icon: z.string().optional(),
    features: z.array(z.string()).optional(),
    startingPrice: z.string().optional(),
    timeline: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  projects,
  reviews,
  services,
};
