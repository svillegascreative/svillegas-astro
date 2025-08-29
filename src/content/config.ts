import { defineCollection, z } from "astro:content";

/** Updates posted in "/now" */
const nowCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.string(),
  }),
});

/** Writing, collected in "/posts" */
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
    lede: z.string().optional(),
    image: z.string().optional(),
  }),
});

/** Projects */
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.string(),
    description: z.string(),
    tech: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          url: z.string(),
          label: z.string(),
        })
      )
      .optional(),
    coverImg: z.string().optional(),
    viewsImg: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  now: nowCollection,
  posts: postsCollection,
  projects: projectsCollection,
};
